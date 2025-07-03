import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '06_09_2022',
    title: 'Dependabot updates hit GA in GHES',
    date: 'June 9, 2022',
    excerpt: 'A deep dive into how Dependabot updates are now generally available in GitHub Enterprise Server, including technical implementation details and impact for enterprise users.',
    readTime: '6 min read',
    isExternal: true,
    externalUrl: 'https://github.blog/2022-06-09-dependabot-updates-hit-ga-in-ghes/',
    source: 'github',
    content: <div></div>
  },
  {
    id: '02_29_2020',
    title: 'Testing TypeScript Packages Before Publishing to NPM',
    date: 'February 29, 2020',
    excerpt: 'Learn how to properly test TypeScript packages locally before publishing to NPM using npm pack.',
    readTime: '8 min read',
    content: (
      <div className="prose prose-lg max-w-none">
        <h2 id="tldr">TLDR;</h2>
        <p>
          Before publishing TypeScript or really any JS package to npm, test with{' '}
          <code>npm pack</code>.
        </p>
        <p>Inside package to publish:</p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <code>
            {`~/package $ npm pack
...
npm notice === Tarball Details ===
npm notice name: package
npm notice version: 0.0.0
npm notice filename: package-0.0.0.tgz
....`}
          </code>
        </pre>

        <p>
          With the tar just generated at <code>~/package/package-0.0.0.tar</code>,
          Inside test project with dependency:
        </p>

        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <code>
            {`~/project $ npm install ~/package/package-0.0.0.tgz
~/project $ npm run start`}
          </code>
        </pre>

        <p>Make sure to:</p>
        <ul>
          <li>
            In you package.json, have <code>main</code> set to{' '}
            <code>dist/index.js</code> without the prepended <code>./</code>
          </li>
          <li>
            In you package.json, make sure <code>prepack</code> is a script set to{' '}
            <code>npm run build</code>
          </li>
        </ul>

        <h1 id="explanation">Explanation</h1>
        <p>
          When developing on Cloudflare Worker's package{' '}
          <a href="https://github.com/cloudflare/kv-asset-handler" className="text-blue-400 hover:text-blue-300">
            kv-static-asset-handler
          </a>{' '}
          I saw how valuable adding TypeScript would be.
        </p>

        <p>
          With my teammates on board with TypeScript I tested the package, but I
          made the mistake just using npm link. <code>npm link</code> is great for
          developing packages where you want to test the client fast, but it
          doesn't replicate the build steps of publishing on npm.
        </p>
      </div>
    )
  },
  {
    id: '02_28_2019',
    title: 'Migrating to React-land with Gatsby',
    date: 'February 28, 2019',
    excerpt: 'Chronicles the migration of a large website to React and Gatsby, highlighting technical challenges, performance gains, and lessons learned in adopting a modern static site generator.',
    readTime: '7 min read',
    isExternal: true,
    externalUrl: 'https://blog.cloudflare.com/migrating-to-react-land-gatsby/',
    source: 'cloudflare',
    content: <div></div>
  },
  {
    id: '12_11_2018',
    title: 'OAuth Auth Server through Workers',
    date: 'December 11, 2018',
    excerpt: 'A practical guide to building an OAuth 2.0 authentication server using Cloudflare Workers, including step-by-step implementation, code examples, and best practices for secure, serverless auth flows.',
    readTime: '3 min read',
    isExternal: true,
    externalUrl: 'https://blog.cloudflare.com/oauth-2-0-authentication-server/',
    source: 'cloudflare',
    content: <div></div>
  },
  {
    id: '07_27_2017',
    title: 'Custom Page Selection for Cloudflare Apps',
    date: 'July 27, 2017',
    excerpt: 'Explores the evolution of Cloudflare\'s app installation process, detailing how the team balanced user control and simplicity by leveraging site crawlers and custom URL selection.',
    readTime: '8 min read',
    isExternal: true,
    externalUrl: 'https://blog.cloudflare.com/custom-page-selection',
    source: 'cloudflare',
    content: <div></div>
  },
  {
    id: '01_28_2021',
    title: 'Understanding RV Electrical Systems with Remarkable 2',
    date: 'January 28, 2021',
    excerpt: 'A deep dive into RV electrical systems, from shore power to inverters, documented with my new Remarkable 2.',
    readTime: '12 min read',
    content: (
      <div className="prose prose-lg max-w-none">
        <p>
          I had just bought my first RV 3 hours away from us and wanted to know
          everything about it before I had even seen it. The very same week I
          bought an RV, my fiancée surprised me with a late Christmas gift - a
          Remarkable 2!
        </p>

        <p>
          When I first just rented an RV I was really frustrated by the lack of
          conceptual understanding I had for breaking shit. When you're on shore
          power you can do this but not that. The lights and fridge can always be on while
          you're actively living in it but why?
        </p>

        <img
          src="/images/manual.png"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          alt="RV manual page example"
        />

        <p>
          From the manual, I copied the components to a diagram to understand what was connected to what part.
        </p>

        <img
          src="/images/components.png"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          alt="Drawing of RV electrical components"
        />

        <h2 className="text-2xl font-bold mt-8 mb-4">Shore Power Configuration</h2>
        <p>
          When connected to shore power, the systems work differently than when running on battery or generator power.
        </p>

        <img
          src="/images/Shore_ON.png"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          alt="RV electrical diagram with shore power ON"
        />

        <h2 className="text-2xl font-bold mt-8 mb-4">Engine Power Configuration</h2>
        <img
          src="/images/Engine_ON.png"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          alt="RV electrical diagram with engine power ON"
        />

        <p className="mt-8">
          <strong>Main takeaways:</strong>
        </p>
        <ul>
          <li>
            Read some newbie guides and YouTube videos, but don't attempt to
            master your RV Day -5. It's all about learning as you go.
          </li>
          <li>
            Don't rely on your manuals as the holy grail because they all
            leave out some information and sometimes even lie to you!
          </li>
        </ul>
      </div>
    )
  },
  {
    id: '11_16_2017',
    title: 'The Four: Insights on Big Tech and Digital Disruption',
    date: 'November 16, 2017',
    excerpt: 'My thoughts on Scott Galloway\'s "The Four" and its analysis of Amazon, Apple, Facebook, and Google.',
    readTime: '10 min read',
    content: (
      <div className="prose prose-lg max-w-none">
        <p>
          Was so excited to read on when I could feel the emotional irony in the
          ending of the first chapter where Galloway mentions that the results of
          googling his name appears after some professional athlete:
          <i> "those bastards"</i>.
        </p>

        <p>
          What I found most compelling about this read was breaking into the
          education market and the middle class' existence in the digital age.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Disappearing Middle Class</h2>

        <p>
          Galloway introduces, in quite a scary realization, that if the economy
          keeps trending as is than a very small group of exceptional people will
          control a mass percent of the world's wealth.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-6 italic text-xl my-8">
          It's never been easier to be a billionaire and harder to be a
          millionaire
        </blockquote>

        <h2 className="text-2xl font-bold mt-8 mb-4">Market for Higher Education</h2>

        <p>
          The most eye opening ideas from the book was the idea of the
          next disrupted market being education. I admire the brilliance and
          forthcoming idea of Apple investing in a prestigious university.
        </p>

        <img
          src="/images/chart.svg"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          alt="College tuition increase chart"
        />

        <p>
          From the graph above we can see how consumer price index increases much
          more rapidly for college students above other sectors of education.
        </p>

        <p>
          Overall I think Scott Galloway's combination of research, data, sense
          and business knowledge analyzes the four "horsemen" on point with
          reality. If you haven't read "the four" already it's worth
          a read <i>or</i> a listen like I did on Audible.
        </p>
      </div>
    )
  }
];
