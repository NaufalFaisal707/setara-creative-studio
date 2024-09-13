import {
	Link,
	Links,
	Meta,
	NavLink,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { MouseEvent, useEffect, useRef, useState } from "react";

// asset gambar
import logoSetaraText from "./asset/logo/setara-web-logo-text.png";
import logoSetara from "./asset/logo/setara-web-logo.png";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='id'>
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

	// ref untuk elemen nav border
	const navBorderRef = useRef<HTMLSpanElement>(null);

	// state untuk menyimpan elemen navigasi yang di klik
	const [ruteTarget, setRuteTarget] = useState<HTMLLinkElement | null>(null);

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

	function warnaNavBorder(target: HTMLLinkElement) {
		switch (target.id) {
			case "projects":
				return "#00A7A7";
				break;
			case "services":
				return "#F0563E";
				break;
			case "about":
				return "#FA9F34";
				break;

			default:
				return "";
				break;
		}
	}

	function updatePosisiNavBorder(target: HTMLLinkElement) {
		if (navBorderRef.current) {
			navBorderRef.current.style.width = `${target.clientWidth}px`;
			navBorderRef.current.style.left = `${target.offsetLeft}px`;
			navBorderRef.current.style.borderColor = warnaNavBorder(target);
		}
	}

	function fokusNavigasi(e: MouseEvent<HTMLAnchorElement>) {
		const target = e.target as HTMLLinkElement;

		updatePosisiNavBorder(target);
		setRuteTarget(target);
	}

	// membuat elemen nav border mengikuti elemen target saat halaman di resize
	useEffect(() => {
		function handleResize() {
			if (ruteTarget) {
				updatePosisiNavBorder(ruteTarget);
			}
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [ruteTarget]);

	return (
		<>
			{/* navbar */}
			<nav className='bg-white h-14 sticky top-0 '>
				<div className='xl:max-w-7xl lg:max-w-5xl md:max-w-2xl max-w-full mx-auto h-full duration-150 ease-in-out'>
					<div className='px-4 h-full flex gap-4 relative'>
						<Link
							to={"/"}
							onClick={fokusNavigasi}
							className='grid place-content-center'
						>
							<img
								src={logoSetara}
								className='h-8 lg:hidden inline'
								alt='logo perusahaan setara'
							/>
							<img
								src={logoSetaraText}
								className='h-8 lg:inline hidden'
								alt='logo perusahaan setara'
							/>
						</Link>
						<div className='grow flex'>
							<div className='grow'>
								{/* navigasi */}
								<ul
									className={[
										"lg:flex gap-4 w-fit hidden font-semibold text-neutral-600 select-none h-full",
										posisiNavigasi(),
									].join(" ")}
								>
									<NavLink
										id='projects'
										to={"/projects"}
										onClick={fokusNavigasi}
										className={({ isActive }) =>
											[
												isActive ? "text-[#00A7A7]" : "hover:text-[#00A7A7]",
												"grid place-content-center",
											].join(" ")
										}
									>
										Projects
									</NavLink>

									<NavLink
										id='services'
										to={"/services"}
										onClick={fokusNavigasi}
										className={({ isActive }) =>
											[
												isActive ? "text-[#F0563E]" : "hover:text-[#F0563E]",
												"grid place-content-center",
											].join(" ")
										}
									>
										Services
									</NavLink>
									<NavLink
										id='about'
										to={"/about"}
										onClick={fokusNavigasi}
										className={({ isActive }) =>
											[
												isActive ? "text-[#FA9F34]" : "hover:text-[#FA9F34]",
												"grid place-content-center",
											].join(" ")
										}
									>
										About
									</NavLink>

									{/* nav border */}
									<span
										ref={navBorderRef}
										className='absolute lg:inline hidden bottom-0 border duration-150 ease-out'
									/>
								</ul>
							</div>
							<div className='ms-4 flex gap-4'>
								<button>Contact Us!</button>

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
