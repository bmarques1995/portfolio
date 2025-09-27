import { BlogPosts } from 'app/components/posts'
import Presentation from './components/presentation'

export default function Page() {
  return (
    <section>
      <Presentation/>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
