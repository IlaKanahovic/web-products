'use client'

import { HeaderDesctop } from "@/components/layuot/header/headerDesctop/HeaderDesctop";
import { HeaderMobile } from "@/components/layuot/header/headerMobile/HeaderMobile";
import useWindowDimensions from "@/lib/utils/getWidthDocument";

export default function Home() {

  const { width } = useWindowDimensions()

  return (
    <div>
      {width < 768 ? <HeaderMobile /> : <HeaderDesctop /> }
      asfafafa
    </div>
  )
}
