// our-domain.com/news

import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJs is a Great Framework
          </Link>
        </li>
        <li>Somthing Else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
