import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Experience = lazy(() => import('./components/Experience'))
const Education = lazy(() => import('./components/Education'))
const Blog = lazy(() => import('./components/Blog'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function Spinner() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<Spinner />}><About /></Suspense>
        <Suspense fallback={<Spinner />}><Skills /></Suspense>
        <Suspense fallback={<Spinner />}><Projects /></Suspense>
        <Suspense fallback={<Spinner />}><Experience /></Suspense>
        <Suspense fallback={<Spinner />}><Education /></Suspense>
        <Suspense fallback={<Spinner />}><Blog /></Suspense>
        <Suspense fallback={<Spinner />}><Contact /></Suspense>
      </main>
      <Suspense fallback={null}><Footer /></Suspense>
    </div>
  )
}
