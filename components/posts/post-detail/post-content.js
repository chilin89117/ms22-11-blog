import ReactMarkdown from 'react-markdown'
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import Image from 'next/image'
import PostHeader from './post-header'
import styles from './post-content.module.css'

SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('jsx', jsx)

const PostContent = ({postData}) => {
  const {slug, title, image, content} = postData
  const imagePath = `/images/posts/${slug}/${image}`
  const customRenderers = {
    // prevent image <div> from rendering inside <p>
    paragraph(p) {
      const {node} = p
      if (node.children[0].type === 'image') {
        const image = node.children[0]
        return (
          <div className={styles.image}>
            <Image src={`/images/posts/${slug}/${image.url}`} alt={image.alt} width={600} height={300} />
          </div>
        )
      }
      return <p>{p.children}</p>
    },
    code({language, value}) {
      return <SyntaxHighlighter language={language} style={a11yDark} children={value} />
    }
  }

  return (
    <article className={styles.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers} >{content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
