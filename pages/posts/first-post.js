import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First post</title>
        </Head>

        <h1>First Post</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid consectetur consequatur
          consequuntur culpa dolor eveniet fuga illum, impedit incidunt iure nemo nihil numquam odio, officiis quaerat,
          quibusdam repellat sequi temporibus voluptatem. Animi at aut blanditiis culpa ea fuga fugiat impedit, ipsa
          iusto laboriosam laudantium, libero minus nobis odit, officiis pariatur perferendis possimus quaerat rerum
          vitae. Harum illo modi sunt!</p>
        <h2>
          <Link href="/">Back to home!!!</Link>
        </h2>
      </Layout>
    </>
  );
}