import Head from 'next/head'

interface Props {
  title: string
  content?: string
}

const Meta = ({
  title,
  content = 'Generated by create next app'
}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Meta