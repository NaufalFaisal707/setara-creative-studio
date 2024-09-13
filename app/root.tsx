import {
	Link,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					type='image/svg+xml'
					href='/setara-favicon.svg'
				/>
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	// deklarasi type
	type TPosisiNavigasi = "start" | "center" | "end";

	// konfigurasi
	const POSISI_NAVIGASI: TPosisiNavigasi = "end";

	// fungsi
	function posisiNavigasi() {
		switch (POSISI_NAVIGASI) {
			case "start":
				return "me-auto";
				break;
			case "center":
				return "mx-auto";
				break;
			case "end":
				return "ms-auto";
				break;
			default:
				return "me-auto";
				break;
		}
	}

	return (
		<>
			{/* navbar */}
			<nav className='bg-white h-14 sticky top-0 '>
				<div className='xl:max-w-7xl lg:max-w-5xl md:max-w-2xl max-w-full mx-auto h-full duration-150 ease-out'>
					<div className='px-2 h-full items-center flex gap-x-2'>
						<Link to={"/"}>logo</Link>
						<div className='grow flex'>
							<div className='grow'>
								{/* navigasi */}
								<ul
									className={[
										"lg:flex gap-2 w-fit hidden font-semibold text-neutral-600",
										posisiNavigasi(),
									].join(" ")}
								>
									<Link to={"/projects"}>Projects</Link>
									<Link to={"/services"}>Services</Link>
									<Link to={"/about"}>About</Link>
								</ul>
							</div>
							<div className='ms-2 flex gap-2'>
								<h1>Contact Us!</h1>

								{/* 
									TODO:
									- [ ] saat layar kecil (lg), jadi hamburger menu.
								*/}
								<h1 className='hidden'>hmenu</h1>
							</div>
						</div>
					</div>
				</div>
			</nav>

			{/* kontainer dari konten yang ingin di render dari route */}
			<div className='xl:max-w-7xl lg:max-w-5xl md:max-w-2xl max-w-full mx-auto duration-150 ease-out'>
				<Outlet />
			</div>
		</>
	);
}
