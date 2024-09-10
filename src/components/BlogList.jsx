import React from 'react'

const BlogList = () => {
  return (
    <div>
      <header class="bg-orange-400 text-white py-24 text-center">
    <h1 class="text-4xl font-bold">Welcome to My Blog</h1>
    <p class="mt-4 text-lg">Sharing knowledge, thoughts, and stories.</p>
  </header>

  
  <section class="container mx-auto px-4 py-12">
    <h2 class="text-3xl font-semibold text-gray-800 mb-8 text-center">Latest Posts</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article class="bg-white rounded-lg shadow-md overflow-hidden">
        {/* <img src="https://via.placeholder.com/400x250" alt="Post Image" class="w-full"> */}
        <div class="p-6">
          <h3 class="text-2xl font-semibold mb-2 text-gray-800">Post Title 1</h3>
          <p class="text-gray-600 mb-4">This is a short description of the first blog post. It gives an idea of what the content is about.</p>
          <a href="#" class="text-blue-500 hover:underline">Read More →</a>
        </div>
      </article>

     
      <article class="bg-white rounded-lg shadow-md overflow-hidden">
        {/* <img src="https://via.placeholder.com/400x250" alt="Post Image" class="w-full"> */}
        <div class="p-6">
          <h3 class="text-2xl font-semibold mb-2 text-gray-800">Post Title 2</h3>
          <p class="text-gray-600 mb-4">This is a short description of the second blog post. It gives an overview of the blog content.</p>
          <a href="#" class="text-blue-500 hover:underline">Read More →</a>
        </div>
      </article>

      <article class="bg-white rounded-lg shadow-md overflow-hidden">
        {/* <img src="https://via.placeholder.com/400x250" alt="Post Image" class="w-full"> */}
        <div class="p-6">
          <h3 class="text-2xl font-semibold mb-2 text-gray-800">Post Title 3</h3>
          <p class="text-gray-600 mb-4">A quick summary of what the third blog post covers, enticing readers to click through.</p>
          <a href="#" class="text-blue-500 hover:underline">Read More →</a>
        </div>
      </article>

    </div>
  </section>
    </div>
  )
}

export default BlogList
