
interface CategoryProps{
  params:{
    id:string
  }
}

export default function Category({params}:CategoryProps){
  return(
    <div>{params.id}</div>
  )
}