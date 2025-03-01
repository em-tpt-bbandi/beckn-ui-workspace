import React from 'react'
// import Image from 'next/image'
import { Image } from '@chakra-ui/react'
import { useLanguage } from '../../hooks/useLanguage'
import { benefitContent } from '../../mock/benefits'

const Benefits = () => {
  const { t } = useLanguage()
  return (
    <div className="grid gap-4 grid-cols-12 my-8 pt-4 xl:max-w-[2100px] mx-auto">
      {benefitContent.map(benefitItem => {
        return (
          <div className="flex flex-col items-center col-span-6 lg:col-span-3 " key={benefitItem.title}>
            <Image height={48} width={48} src={benefitItem.imgSrc} alt={benefitItem.title} className="" />
            <p className="py-2 text-sm text-center md:text-base text-palette-base/90">{t(`${benefitItem.title}`)}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Benefits
