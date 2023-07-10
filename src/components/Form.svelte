<script>
  import styles from './laundry.module.css'
</script>


<section>
  <div class={styles.services2} id='home'>
    <div class={styles.servicesblack2}>
      <div class='pt-24 pb-8 overflow-hidden z-10'>
        <div class='mx-auto max-w-7xl px-4 sm:px-6'>
          <div class='lg:flex lg:justify-center lg:items-center lg:flex-col mx-auto lg:gap-16 justify-center'>
            <div class='relative z-10 px-4 mb-8 sm:px-6 sm:text-center sm:mb-16 lg:mb-0 lg:px-0 lg:flex col-span-6'>
              <div class='lg:py-32 flex items-center justify-center flex-col'>
                <p class='mt-4 mb-4 grid grid-cols-1 drop-shadow-md animate-fade-up animate-duration-[1200ms] animate-delay-500 animate-ease-out justify-items-center text-2xl pb-3 lg:text-6xl h-full font-[PoppinsBold] text-white tracking-tight font-extrabold primary-title sm:mt-5 text-center'>
                  Contacto
                </p>
                <footer class="flex" aria-label="Breadcrumb">
                  <ul class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                      <a href="/" class="inline-flex items-center text-sm font-medium text-white hover:text-[#e1e1e1] shadow-black drop-shadow-md">
                        <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        Home
                      </a>
                    </li>
                    <li>
                      <div class="flex items-center">
                        <svg aria-hidden="true" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        <a href="/contact" class="ml-1 text-sm font-medium text-white hover:text-[#e1e1e1] shadow-black drop-shadow-md md:ml-2">Contacto</a>
                      </div>
                    </li>
                  </ul>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h2 class='px-4 md:text-center md:px-32 font-[Satoshi] mt-16 text-lg md:text-2xl'>Estamos muy felices de que estes aquí. Si deseas obtener más información o deseas adquirir alguno de nuestros servicios, pueden llenar el siguiente formulario y nos pondremos en contacto contigo lo más pronto posible.</h2>
    <div class='min-w-screen min-h-screen bg-footer flex items-center justify-center px-5 py-5'>
      <div class='text-gray-500 rounded-3xl w-[1400px] overflow-hidden'>
        <div class='md:flex w-full'>
          <div class='hidden md:block w-1/2 py-32 px-12 select-none'>
            <img src='/folded-clothes.png' alt='Dry Clothes' />
          </div>
          <div class='w-full md:w-1/2 py-36 px-5 md:px-10'>
            <form action='' method='POST' id='form'>
              <div class='flex -mx-3'>
                <div class='w-1/2 px-3 mb-5'>
                  <label
                    for=''
                    class='text-lg font-[PoppinsBold] px-1 py-2 text-black'
                  >
                    Nombre
                  </label>
                  <div class='flex'>
                    <div class='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                      <i class='mdi mdi-account-outline text-gray-400 text-lg'></i>
                    </div>
                    <input
                      name='name'
                      id='name'
                      type='text'
                      class='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#0F74BA]'
                    />
                  </div>
                </div>
                <div class='w-1/2 px-3 mb-5'>
                  <label
                    for=''
                    class='text-lg font-[PoppinsBold] px-1 text-black'
                  >
                    Apellido
                  </label>
                  <div class='flex'>
                    <div class='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                      <i class='mdi mdi-account-outline text-gray-400 text-lg'></i>
                    </div>
                    <input
                      name='lastname'
                      id='lastname'
                      type='text'
                      class='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#0F74BA]'
                    />
                  </div>
                </div>
              </div>
              <div class='flex -mx-3'>
                <div class='w-full px-3 mb-5'>
                  <label
                    for=''
                    class='text-lg font-[PoppinsBold] px-1 text-black'
                  >
                    Teléfono
                  </label>
                  <div class='flex'>
                    <div class='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                      <i class='mdi mdi-email-outline text-gray-400 text-lg'></i>
                    </div>
                    <input
                      name='user'
                      type='text'
                      class='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#0F74BA]'
                    />
                  </div>
                </div>
              </div>
              <div class='flex -mx-3'>
                <div class='w-full px-3 mb-5'>
                  <label
                    for=''
                    class='text-lg font-[PoppinsBold] px-1 text-black'
                  >
                    Correo Electrónico
                  </label>
                  <div class='flex'>
                    <div class='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                      <i class='mdi mdi-lock-outline text-gray-400 text-lg'></i>
                    </div>
                    <input
                      name='email'
                      id='email'
                      type='text'
                      class='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-[#0F74BA]'
                    />
                  </div>
                </div>
              </div>
              <label
                for=''
                class='text-lg font-[PoppinsBold] px-1 text-black mb-2'
              >
                Servicio que desea adquirir
              </label>
              <div class='grid grid-cols-1 gap-4 text-center sm:grid-cols-3 mt-1'>
                <div>
                  <input
                    class='peer sr-only'
                    id='option1'
                    type='radio'
                    tabindex='-1'
                    name='option'
                  />

                  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                  <label
                    for='option1'
                    class='block w-full rounded-lg border bg-white border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-[#0F74BA] peer-checked:text-white'
                    tabindex='0'
                  >
                    <span class='text-base font-[Satoshi] font-semibold'>
                      {' '}
                      Tintorería{' '}
                    </span>
                  </label>
                </div>

                <div>
                  <input
                    class='peer sr-only'
                    id='option2'
                    type='radio'
                    tabindex='-1'
                    name='option'
                  />

                  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                  <label
                    for='option2'
                    class='block w-full rounded-lg border bg-white border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-[#0F74BA] peer-checked:text-white'
                    tabindex='0'
                  >
                    <span class='text-base font-[Satoshi] font-semibold'>
                      {' '}
                      Limpieza de cuero{' '}
                    </span>
                  </label>
                </div>

                <div>
                  <input
                    class='peer sr-only'
                    id='option3'
                    type='radio'
                    tabindex='-1'
                    name='option'
                  />

                  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                  <label
                    for='option3'
                    class='block w-full rounded-lg border bg-white border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-[#0F74BA] peer-checked:text-white'
                    tabindex='0'
                  >
                    <span class='text-base font-[Satoshi] font-semibold'>
                      {' '}
                      Limpieza de alfombras{' '}
                    </span>
                  </label>
                </div>
              </div>
              <div class='flex -mx-3 mt-5'>
                <div class='w-full px-3 mb-5'>
                  <button
                    type='submit'
                    name='registrarse'
                    class='inline-block border-2 text-center bg-white border-[#0F74BA] rounded-full select-none px-7 py-2 hover:bg-[#0F74BA] hover:text-white transition-colors duration-100 ease-in-out text-[#0F74BA] font-[PoppinsBold] text-base'
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</section>