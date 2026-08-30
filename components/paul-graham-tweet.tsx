import { Suspense } from 'react'
import { unstable_cache } from 'next/cache'
import { getTweet as fetchTweet } from 'react-tweet/api'

const FIRST_PG = '1954711073841635804'
const NEXT_PG_TWEETS = ['1955037551196246312', '1955256725994393674']
const ANKIT = '1960415581716545608'
const TARO = '1960365165494575131'

type TweetFallback = {
  name: string
  screenName: string
  avatar: string
  text: string
  createdAt: string
  verified?: boolean
  ycBadge?: boolean
}

/** Used when Twitter syndication hides a tweet (private/limited account). */
const TWEET_FALLBACKS: Record<string, TweetFallback> = {
  [ANKIT]: {
    name: 'Ankit Gupta',
    screenName: 'agupta',
    avatar: '/tweets/ankit-gupta.jpg',
    text: "Congrats to Pranavkrishna & Raghav on launching! These are two of the most impressive founders I've ever met, redefining what I think is possible for a pair of young founders to pull off. This is one to watch.",
    createdAt: '2025-08-26T18:54:00.000Z',
    verified: true,
    ycBadge: true,
  },
}

const getTweet = unstable_cache(
  async (id: string) => fetchTweet(id),
  ['tweet'],
  { revalidate: 60 * 60 * 24 }
)

function decodeTweetText(text: string) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
}

/** Strip leading @mentions (reply headers) from tweet text. */
function stripLeadingMentions(text: string) {
  return text.replace(/^(?:@\w+\s*)+/, '').trim()
}

/** Replace founder @handles with display names. */
function replaceFounderHandles(text: string) {
  return text
    .replace(/@pkrishnasuresh/gi, 'Pranavkrishna')
    .replace(/@raghavarora108/gi, 'Raghav')
    .replace(/[ \t]{2,}/g, ' ')
    .trim()
}

function formatTweetDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}

function YcBadge() {
  return (
    <span
      className="ml-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] bg-[#ff6600] text-[10px] font-semibold leading-none text-white"
      title="Y Combinator"
      aria-label="Y Combinator"
    >
      Y
    </span>
  )
}

function BlueVerifiedBadge() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-label="Verified"
      className="ml-0.5 h-[16px] w-[16px] shrink-0 fill-[#1d9bf0] sm:h-[18px] sm:w-[18px]"
    >
      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
    </svg>
  )
}

async function MinimalTweet({
  id,
  compact = false,
  stripMentions = false,
  replaceHandles = false,
}: {
  id: string
  compact?: boolean
  stripMentions?: boolean
  replaceHandles?: boolean
}) {
  const tweet = await getTweet(id)
  const fallback = TWEET_FALLBACKS[id]
  const fallbackUrl = `https://x.com/i/status/${id}`

  if (!tweet && !fallback) {
    return (
      <a
        href={fallbackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full rounded-xl border border-[#e5e5e5] px-4 py-3 text-[14px] text-[#555] transition-colors hover:border-[#ccc] sm:px-5 sm:py-4 sm:text-[15px]"
      >
        View tweet on X →
      </a>
    )
  }

  const tweetUrl = tweet
    ? `https://x.com/${tweet.user.screen_name}/status/${tweet.id_str}`
    : `https://x.com/${fallback!.screenName}/status/${id}`
  const showVerified = tweet
    ? tweet.user.verified || tweet.user.is_blue_verified
    : Boolean(fallback?.verified)
  const name = tweet?.user.name ?? fallback!.name
  const screenName = tweet?.user.screen_name ?? fallback!.screenName
  const avatar = tweet
    ? tweet.user.profile_image_url_https.replace('_normal', '_bigger')
    : fallback!.avatar
  const createdAt = tweet?.created_at ?? fallback!.createdAt
  const ycBadgeUrl = tweet?.user.highlighted_label?.badge?.url
  const ycBadgeAlt = tweet?.user.highlighted_label?.description || 'Badge'
  const showStaticYcBadge = !tweet && Boolean(fallback?.ycBadge)

  let body = decodeTweetText(tweet?.text ?? fallback!.text)
  if (stripMentions) {
    body = stripLeadingMentions(body)
  }
  if (replaceHandles) {
    body = replaceFounderHandles(body)
  }

  return (
    <a
      href={tweetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex h-full min-w-0 flex-col rounded-xl border border-[#e5e5e5] bg-white transition-colors hover:border-[#ccc] hover:bg-[#fafafa] ${
        compact ? 'px-3.5 py-3 sm:px-4 sm:py-3.5' : 'px-4 py-3.5 sm:px-5 sm:py-4'
      }`}
    >
      <div className={`mb-2.5 flex items-center gap-2.5 ${compact ? 'sm:mb-3' : 'mb-3 gap-3'}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatar}
          alt=""
          width={compact ? 32 : 40}
          height={compact ? 32 : 40}
          className={`rounded-full ${compact ? 'h-8 w-8' : 'h-10 w-10'}`}
        />
        <div className="min-w-0">
          <div className="flex items-center gap-0.5">
            <span
              className={`truncate font-semibold text-black ${
                compact ? 'text-[13px] sm:text-[14px]' : 'text-[15px]'
              }`}
            >
              {name}
            </span>
            {showVerified ? <BlueVerifiedBadge /> : null}
            {ycBadgeUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={ycBadgeUrl}
                alt={ycBadgeAlt}
                title={ycBadgeAlt}
                width={16}
                height={16}
                className="ml-0.5 h-4 w-4 rounded-[3px] object-cover"
              />
            ) : showStaticYcBadge ? (
              <YcBadge />
            ) : null}
          </div>
          <div className={`truncate text-[#666] ${compact ? 'text-[11px] sm:text-[12px]' : 'text-[13px]'}`}>
            @{screenName}
          </div>
        </div>
        <svg
          className="ml-auto h-3.5 w-3.5 shrink-0 text-black opacity-70 transition-opacity group-hover:opacity-100 sm:h-4 sm:w-4"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.259 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
      </div>

      <p
        className={`flex-1 break-words whitespace-pre-wrap leading-relaxed text-black [overflow-wrap:anywhere] ${
          compact ? 'text-[13px] sm:text-[14px]' : 'text-[15px] sm:text-[16px]'
        }`}
      >
        {body}
      </p>

      <div
        className={`mt-3 border-t border-[#eee] pt-2.5 text-[#666] ${
          compact ? 'text-[11px] sm:text-[12px]' : 'mt-4 pt-3 text-[13px]'
        }`}
      >
        {formatTweetDate(createdAt)}
      </div>
    </a>
  )
}

function TweetCardSkeleton({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`animate-pulse rounded-xl border border-[#e5e5e5] ${
        compact ? 'px-3.5 py-3 sm:px-4 sm:py-3.5' : 'px-5 py-4'
      }`}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className={`rounded-full bg-[#eee] ${compact ? 'h-8 w-8' : 'h-10 w-10'}`} />
        <div className="space-y-2">
          <div className="h-3 w-24 rounded bg-[#eee]" />
          <div className="h-3 w-14 rounded bg-[#eee]" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 w-full rounded bg-[#eee]" />
        <div className="h-3 w-[85%] rounded bg-[#eee]" />
        <div className="h-3 w-[65%] rounded bg-[#eee]" />
      </div>
    </div>
  )
}

function TweetSlot({
  id,
  compact = false,
  stripMentions = false,
  replaceHandles = false,
}: {
  id: string
  compact?: boolean
  stripMentions?: boolean
  replaceHandles?: boolean
}) {
  return (
    <Suspense fallback={<TweetCardSkeleton compact={compact} />}>
      <MinimalTweet
        id={id}
        compact={compact}
        stripMentions={stripMentions}
        replaceHandles={replaceHandles}
      />
    </Suspense>
  )
}

export function FeaturedTweets() {
  return (
    <section className="mb-12 sm:mb-16">
      <h2 className="mb-6 text-xl font-semibold tracking-tight text-black sm:mb-8 sm:text-2xl">
        Tweet Wall
      </h2>

      <div className="space-y-4">
        {/* First PG + next two PG side by side */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <TweetSlot id={FIRST_PG} compact />
          {NEXT_PG_TWEETS.map((id) => (
            <TweetSlot key={id} id={id} compact stripMentions />
          ))}
        </div>

        {/* Ankit + Taro */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <TweetSlot id={ANKIT} compact replaceHandles />
          <TweetSlot id={TARO} compact stripMentions replaceHandles />
        </div>
      </div>
    </section>
  )
}

/** @deprecated Use FeaturedTweets */
export const PaulGrahamTweet = FeaturedTweets
