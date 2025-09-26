import { getMDXData } from "app/shared/mdx_reader"
import path from "path"

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts', 'en_US'))
}
