import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import StarRatingComponent from 'react-star-rating-component'
import { RetailItem } from '../../../lib/types/products'
import CardActions from './CardActions'
import ProductPrice from '../ProductPrice'
import { toBinary } from '../../../utilities/common-utils'
import { Box, Flex, Text, Image } from '@chakra-ui/react'
import StarIcon from '../../../public/images/Star.svg'
import greenVegIcon from '../../../public/images/greenVeg.svg'
import redNonVegIcon from '../../../public/images/redNonVeg.svg'
import { useLanguage } from '../../../hooks/useLanguage'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { productInfoActions } from '../../../store/product-slice'
import ProductDetails from '@components/productDetails'

interface Props {
  product: RetailItem
}

const Card: React.FC<Props> = ({ product }) => {
  const { t } = useLanguage()

  const encodedProduct = window.btoa(toBinary(JSON.stringify(product)))
  const dispatch = useDispatch()
  const router = useRouter()

  return (
    <Box
      minH={product.tags.foodType ? '138px' : '168px'}
      maxH={'100%'}
      className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-2 shadow-xl my-1 md:my-4 ltr:mr-2 rtl:ml-1 md:mx-6  bg-[#fff] rounded-xl flex relative"
      onClick={() => localStorage.setItem('selectCardHeaderText', product.descriptor.name)}
    >
      <a
        onClick={e => {
          e.preventDefault()
          dispatch(productInfoActions.setProductDetails({ encodedProduct, product }))
          if (typeof window !== 'undefined')
            localStorage.setItem('productDetails', JSON.stringify({ encodedProduct: encodedProduct, product: product }))

          router.push({
            pathname: '/product',
            query: {
              productDetails: encodedProduct
            }
          })
        }}
        className="relative flex w-full md:items-center md:flex-col "
      >
        <Box
          w={'125px'}
          className="relative flex flex-col items-center justify-between md:w-full bg-slate-400/30 md:px-6 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none"
        >
          <div className="flex items-center h-full product-img-span">
            <Image
              src={product.descriptor.images[0]}
              width={'110px'}
              height={'133px'}
              alt={product.descriptor.name}
              className="object-contain transition-transform duration-300 ease-in-out drop-shadow-xl hover:scale-110"
            />
          </div>
        </Box>
        <Box p={'15px'} pt={'11px'} w={'63%'} position={'relative'} className="flex flex-col md:w-full md:px-3 md:py-4">
          <Flex justifyContent={'space-between'} alignItems={'flex-start'} w={'100%'}>
            <Text
              w={'80%'}
              fontWeight={'600'}
              fontSize={'15px'}
              mb={'10px'}
              noOfLines={2}
              textOverflow="ellipsis"
              whiteSpace="pre-wrap"
              overflowWrap="break-word"
            >
              {product.descriptor.name}
            </Text>

            {product.tags.foodType ? (
              product.tags.foodType === 'veg' ? (
                <Image pt={'4px'} src={greenVegIcon} alt="greenVegIcon" />
              ) : (
                <Image pt={'4px'} src={redNonVegIcon} alt="nonVegIcon" />
              )
            ) : null}
          </Flex>

          <Flex fontSize={'12px'} alignItems={'center'} mb={'8px'}>
            <Text fontWeight={700}>{t('soldBy')}</Text>
            <Text pl={'3px'}>{(product as any).bppName}</Text>
          </Flex>
          <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            position={'absolute'}
            bottom={'11px'}
            width={'calc(100% - 30px)'}
          >
            <ProductPrice price={parseFloat(product.price.value)} />
            <Flex alignItems={'center'}>
              <Image src={StarIcon} alt="startIcon" />
              <Text fontSize={'12px'} pl={'5px'}>
                {product.tags.Rating}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </a>

      <CardActions product={product} />
    </Box>
  )
}

export default Card
