import Link from 'next/link'

export default function HeaderComponent() {
	return (
		<div className='flex items-center sticky top-0 bg-white py-8 px-4'>
			<div className='font-bold text-xl'>AI Solutions</div>
			<div className='ml-auto flex items-center gap-4 text-sm font-medium'>
				<Link className='hover:opacity-50' href='/#banner'>
					Home
				</Link>
				<Link className='hover:opacity-50' href='/#services'>
					Services
				</Link>
				<Link className='hover:opacity-50' href='/#events'>
					Events
				</Link>
				<Link className='hover:opacity-50' href='/#feedback'>
					Feedback
				</Link>
				<Link className='hover:opacity-50' href='/article'>
					Article
				</Link>
				<Link className='hover:opacity-50' href='/contact-us'>
					Contact us
				</Link>
			</div>
		</div>
	)
}
