import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";

export const revalidate = 0;


const HomePage = async ( ) => {

  const billboard = await getBillboard("7b319e64-88c5-46e7-93d3-73a8ad247b3c")
  return(

    <Container>
      <div>
        
      </div>


    </Container>
 )
}

export default HomePage;