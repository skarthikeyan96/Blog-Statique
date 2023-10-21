import Link from 'next/link';
import {Container, Flex} from '@radix-ui/themes'

export default function Home() {
  return (
   <nav className='shadow-sm py-8 px-8 md:px-4'>
    <Container>
      <Flex justify="between">
          <Link href="/generate-stats" className="font-bold text-lg"> Blog stats </Link>
          <Link href="/" className='text-gray-900'> Homepage </Link>
      </Flex>
    </Container>
   </nav>
  )
}
