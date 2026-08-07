import { Link } from "@tanstack/react-router";
import { Logo, Wordmark } from "./Logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <Logo size={40} />
          <Wordmark />
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="underline-sweep text-muted-foreground hover:text-foreground">
            الرئيسية
          </Link>
          <Link
            to="/mawad"
            className="underline-sweep text-muted-foreground hover:text-foreground"
          >
            المواد
          </Link>
          <Link
            to="/khizana"
            className="underline-sweep text-muted-foreground hover:text-foreground"
          >
            خزانة PDF
          </Link>

        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 py-10 text-center text-sm text-muted-foreground">
      <p>منصة نُبوغ — دروس السنة الثالثة إعدادي وفق المنهاج المغربي.</p>
    </footer>
  );
}
