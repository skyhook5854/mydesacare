export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <div
        class="flex items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-indigo-600
    to-blue-400
  ">
        <div class="px-40 py-20 bg-white rounded-lg shadow-xl">
          <div class="flex flex-col items-center">
            <img
              className="w-40 h-20"
              src="https://cdn.dribbble.com/users/2879528/screenshots/14608912/media/ed6628d399f8215a5b530a9564772d62.png?compress=1&resize=1200x900&vertical=top"
            />
            {/* <h1 class="font-bold text-blue-600 text-2xl">404</h1> */}

            <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span class="text-red-500">Oops!</span> Something went wrong
            </h6>

            <p class="mb-8 text-center text-gray-500 md:text-lg">
              Please try again later
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
