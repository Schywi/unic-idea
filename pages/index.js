import Link from 'next/link';
import IndexPage from '../compontents/indexPage'


function Home() {
        
 
    
    return (<div>
        <h1>Home</h1>

        <IndexPage/>
      
        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
    </div>)
}

export default Home