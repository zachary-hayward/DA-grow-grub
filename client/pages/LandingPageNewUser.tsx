import { MouseEvent } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { Link } from 'react-router-dom'
import SecondaryButton from '../components/SecondaryButton'

export default function LandingPage() {
  return (
    <>
      <div
        className="banner-container relative flex h-96 items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/homepage/Homepage_banner_bg.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <h2 className="text-4xl font-bold">
            Transform your gardening experience with tools tailored for veggie
            enthusiasts like you.
          </h2>
        </div>
      </div>
      <div className="h-30 image-center mx-auto w-20 justify-center pb-5 pt-20 pt-8">
        <img src="/images/homepage/pot_shove_icon.png" alt="plant shovel" />
      </div>
      <div className="flex justify-center pb-3">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-green-700">
            Let's setup your garden!
          </h2>
          <p className="max-w-sm py-4 text-base text-green-700">
            It's time to start planting and growing your favourite vegetables.
            Create your first garden and watch your green paradise come to life!
          </p>
        </div>
      </div>
      <div className="align-center flex justify-center pb-20 text-center">
        {/* Link to Register page */}
        <div className="mr-4">
          <Link to="/register">
            <PrimaryButton
              onClick={(event) => {
                throw new Error('Function not implemented.')
              }}
            >
              Sign up now
            </PrimaryButton>
          </Link>
        </div>
        <div>
          {/* This needs to open auth? */}
          <Link to="/">
            <SecondaryButton
              onClick={(event) => {
                throw new Error('Function not implemented.')
              }}
            >
              Sign in
            </SecondaryButton>
          </Link>
        </div>
      </div>
    </>
  )
}
