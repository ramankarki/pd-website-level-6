import ContactUs from '@/contact-us'
import Image from 'next/image'

export default function Home() {
	return (
		<div className='pt-5 pb-10 px-4 lg:px-20'>
			{/* header */}
			<div className='flex items-center sticky top-0 bg-white py-5'>
				<div className='font-bold text-xl text-[#2A4768]'>AI Solutions</div>
				<div className='ml-auto flex items-center gap-4 text-[#1E3149] text-sm font-medium'>
					<a className='hover:opacity-50' href='#banner'>
						Home
					</a>
					<a className='hover:opacity-50' href='#services'>
						Services
					</a>
					<a className='hover:opacity-50' href='#events'>
						Events
					</a>
					<a className='hover:opacity-50' href='#gallery'>
						Gallery
					</a>
					<a className='hover:opacity-50' href='#contact-us'>
						Contact us
					</a>
				</div>
			</div>

			{/* banner */}
			<Image
				id='banner'
				className='w-full mt-10'
				src='/images/banner.jpg'
				alt='banner'
				width={1120}
				height={644}
				priority
			/>

			{/* services */}
			<div id='services'>
				<div className='font-bold text-xl text-center mt-20'>Services</div>
				<div className='mt-3 text-center text-sm'>
					Empowering businesses with innovative AI tools
				</div>
				<div className='flex gap-5 mt-10 [&_*]:w-full text-center [&_p]:mt-4 [&_p]:text-sm'>
					<div>
						<Image
							src='/images/service-1.jpg'
							alt='service 1'
							width={300}
							height={300}
							className=''
						/>
						<p>Fast thinking</p>
					</div>
					<div>
						<Image
							src='/images/service-2.jpg'
							alt='service 2'
							width={300}
							height={300}
						/>
						<p>Better decision making</p>
					</div>
					<div>
						<Image
							src='/images/service-3.jpg'
							alt='service 3'
							width={300}
							height={300}
						/>
						<p>Better results</p>
					</div>
				</div>
			</div>

			{/* upcoming events */}
			<div id='events'>
				<p className='text-xl text-center mt-20 font-bold'>Upcoming events</p>
				<div className='mt-10 flex items-center [&_div]:w-full [&_div]:flex [&_div]:flex-col [&_div]:items-center [&_div]:gap-2 [&_p]:text-sm [&_p+p]:text-xs'>
					<div>
						<Image
							src='/images/event-1.png'
							alt='upcoming 1'
							width={100}
							height={100}
						/>
						<p>Design submit</p>
						<p>Jan 15, 2022</p>
					</div>
					<div>
						<Image
							src='/images/event-2.png'
							alt='upcoming 1'
							width={100}
							height={100}
						/>
						<p>Design submit</p>
						<p>Jan 15, 2022</p>
					</div>
					<div>
						<Image
							src='/images/event-3.png'
							alt='upcoming 1'
							width={100}
							height={100}
						/>
						<p>Design submit</p>
						<p>Jan 15, 2022</p>
					</div>
				</div>
			</div>

			{/* gallery */}
			<div id='gallery'>
				<p className='text-xl text-center mt-20 font-bold'>Gallery</p>
				<Image
					src='/images/gallery-1.png'
					alt='gallery 1'
					width={1280}
					height={526}
					className='w-full h-auto mt-10'
				/>
				<Image
					src='/images/gallery-2.png'
					alt='gallery 2'
					width={1280}
					height={526}
					className='w-full h-auto mt-4'
				/>
			</div>

			{/* customer feedback */}
			<div id='feedback'>
				<p className='text-xl text-center mt-20 font-bold'>Customer feedback</p>
				<div className='mt-10 flex flex-col items-center gap-3'>
					<Image
						src='/images/avatar.png'
						alt='avatar'
						width={100}
						height={100}
					/>
					<p className='font-semibold text-sm'>
						Blake Weston, Find Fill Storage
					</p>
					<div className='flex items-center gap-5'>
						<Image src='/images/star.svg' alt='star' width={32} height={32} />
						<Image src='/images/star.svg' alt='star' width={32} height={32} />
						<Image src='/images/star.svg' alt='star' width={32} height={32} />
						<Image src='/images/star.svg' alt='star' width={32} height={32} />
						<Image src='/images/star.svg' alt='star' width={32} height={32} />
					</div>
					<p className='max-w-[516px] text-center'>
						AI solutions do high-quality work in the allotted timeframe. They
						maintain clear and consistent communication, providing updates on
						key project components and listening to feedback. There are numerous
						different stages, processes, and statuses in our project which made
						the work very complicated, but AI solutions worked it all out.
					</p>
				</div>
			</div>

			{/* contact us */}
			<div id='contact-us'>
				<ContactUs />
			</div>

			<div className='mt-20 flex items-center justify-between'>
				<p>© 2024 AI Solution. All Rights Reserved.</p>
				<p>Privacy policy</p>
				<p>Terms of use</p>
			</div>
		</div>
	)
}
