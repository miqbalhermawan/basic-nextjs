import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/pulse.jpg" width={200} height={150} alt="pulse" />
      <h1>Welcome Iqbal</h1>
    </Layout>
  );
}
