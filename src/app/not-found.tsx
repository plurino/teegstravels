import Link from 'next/link';
import { Compass, Home } from 'lucide-react';
import { YouTubeIcon, TikTokIcon } from '@/components/BrandIcons';
import { CREATOR_DATA } from '@/config/creator';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0d0d0e] text-neutral-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[440px] rounded-3xl bg-neutral-900/80 border border-neutral-800 p-6 text-center flex flex-col items-center gap-4 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        <div className="space-y-1">
          <span className="text-[11px] font-mono text-rose-400 font-semibold uppercase tracking-wider">
            Error 404 • Lost in Transit
          </span>
          <h1 className="text-2xl font-bold text-neutral-100">
            Wrong Sleeper Train?
          </h1>
        </div>

        <p className="text-xs text-neutral-400 leading-relaxed bg-neutral-950/60 p-3.5 rounded-2xl border border-neutral-800/80">
          &ldquo;I have no idea what’s going on 110% of the time&rdquo; — but this URL couldn&apos;t be found! It might have been moved or deleted.
        </p>

        <div className="w-full flex flex-col gap-2 pt-2">
          <Link
            href="/"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition active:scale-98 shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to TeganJohnson.com</span>
          </Link>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={CREATOR_DATA.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-3 rounded-xl bg-neutral-800/60 hover:bg-neutral-800 text-neutral-300 text-xs font-medium flex items-center justify-center gap-1.5 transition"
            >
              <YouTubeIcon className="w-4 h-4 text-red-500" />
              <span>Watch Vlogs</span>
            </a>

            <a
              href={CREATOR_DATA.socials.tiktok}
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-3 rounded-xl bg-neutral-800/60 hover:bg-neutral-800 text-neutral-300 text-xs font-medium flex items-center justify-center gap-1.5 transition"
            >
              <TikTokIcon className="w-4 h-4 text-cyan-400" />
              <span>TikTok Lives</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
