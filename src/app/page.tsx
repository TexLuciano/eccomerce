import Image from 'next/image'
import { Banner } from './components/banner/banner'
import { Category } from './components/category/category'
import { Products } from './components/products/products'


export default function Home() {
  return (
    <div >
     <Banner/>
     <div>
      <div>
        <Category/>
        <Products/>
      </div>
     </div>
    </div>
  )
}
