const posts = [
  {
    id: 1,
    title: 'Aumente sua taxa de conversão',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    imageUrl: 'https://wpblog.zyro.com/cdn-cgi/image/w=1200,q=85/wp-content/uploads/2021/06/pessoa-segurando-celular-em-frente-ao-notebook.jpg',
    author: {
      name: 'Michael Foster',
      role: 'Cofundador / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Como usar a otimização de mecanismos de pesquisa para impulsionar as vendas',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { title: 'Sales', href: '#' },
    imageUrl: 'https://www.evonline.com.br/wp-content/uploads/Frequ%C3%AAncia-ideal-de-postagens.jpg',
    author: {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Melhore a experiência do seu cliente',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { title: 'Business', href: '#' },
    imageUrl: 'https://www.altoastral.com.br/antigas/uploads/legacy/2016/11/mulher-sentada-mesa-tomando-cafe-notebook-digitando-celular-smartphone-compartilhar-imagens-android.jpg',
    author: {
      name: 'Tom Cook',
      role: 'Director of Product',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

export default function Home() {
  const sortedPosts = posts.sort();

  return (
    <main className="">
      <div className=" bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center w-full mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> <span className="text-blue-500">Tech</span>Blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Aprenda como expandir seus negócios com nossa consultoria especializada.
            </p>
          </div>
          <div className="bg-gray-50 mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <article key={post.id} className="p-4 bg-stone-200 flex max-w-xl flex-col items-start justify-between border-collapse">
                <img className='rounded-2xl mb-3' src={post.imageUrl} alt={post.title} width={400} height={400} />
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-blue-500 hover:text-slate-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img className='rounded-full' src={post.author.imageUrl} alt={post.author.name} width={90} height={90} />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
