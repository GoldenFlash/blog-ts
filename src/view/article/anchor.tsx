import React from 'react'
import { Anchor } from 'antd'
const Link = Anchor.Link

  // 转化为锚地可跳转的路径
function transferHref(str: string) {
  let v1 = str.replace(/(\s)|(,)/g, '-')
  let v2 = v1.replace(/[./()]/g, '')
  return `#${v2.replace(/-+/g, '-')}`
}

// 根据 article 来生成锚点列表
function getAnchorList(str: { replace: (arg0: RegExp, arg1: ($0: any, $1: any) => void) => void }) {
  const pattern = /<(h[1-6])[\s\S]+?(?=<\/\1>)/g
  let list:any[] = []
  function pushItem(arr:any, item:any) {
    const len = arr.length
    const matchItem = arr[len - 1]
    if (matchItem && matchItem.tag !== item.tag) {
      pushItem(matchItem.children, item)
    } else {
      arr.push(item)
      // debugger
    }
  }
  str.replace(pattern, ($0, $1) => {
    const title = $0.replace(/.*?>/, '')
    const href = transferHref(title)
    const currentItem = {
      tag: $1, // 标签类型
      title,
      href,
      children: []
    }
    pushItem(list, currentItem)
  })
  return list
}

const Navigation=({content}:any):any=>{
  const list = getAnchorList(content)
  function renderLink({ href, title, children }:any) {
    return (
      <Link key={href} href={href} title={title}>
        {children.length > 0 && children.map((sub:any) => renderLink(sub))}
      </Link>
    )
  }
  return( <Anchor>
    {list.map(renderLink)}
    </Anchor>)
}

export default Navigation



// import { Anchor } from 'antd';

// const { Link } = Anchor;

// ReactDOM.render(
//   <Anchor>
//     <Link href="#components-anchor-demo-basic" title="Basic demo" />
//     <Link href="#components-anchor-demo-static" title="Static demo" />
//     <Link href="#components-anchor-demo-basic" title="Basic demo with Target" target="_blank" />
//     <Link href="#API" title="API">
//       <Link href="#Anchor-Props" title="Anchor Props" />
//       <Link href="#Link-Props" title="Link Props" />
//     </Link>
//   </Anchor>,
//   mountNode,
// );
