<script>
    import styles from './laundry.module.css'
</script>

<section id='contact' class={styles.contactform}>
    <div class='container px-5 mx-auto z-20'>
      <div class='flex items-center justify-center flex-col mt-10 mb-10'>
        <h2 class='contact text-4xl lg:text-6xl drop-shadow-md font-[PoppinsBold] tracking-normal p-4 opacity-90'>
          ¡Contactanos!
        </h2>
        <p class='text-[#212529] text-sm px-6 text-center lg:text-xl font-[Satoshi]'>
          Estamos interesados como fue el trato que recibiste
        </p>
        <p class='text-[#212529] text-sm lg:px-44 text-center lg:text-xl font-[Satoshi]'>
          y si tienes alguna duda o sugerencia, no dudes en contactarnos
        </p>
      </div>
      <form>
        <div class='lg:w-1/2 md:w-2/3 mx-auto'>
          <div class='flex flex-wrap -m-2'>
            <div class='p-2 w-1/2'>
              <div class='relative'>
                <label
                  for=''
                  class='leading-7 text-[20px] text-[#212529] font-[PoppinsMedium]'
                >
                  Nombre
                </label>
                <input
                  required
                  type='text'
                  name='user_'
                  class='w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-600 text-lg font-[PoppinsMedium] outline-none text-black py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
            </div>
            <div class='p-2 w-1/2'>
              <div class='relative'>
                <label
                  for='email'
                  class='leading-7 text-[20px] text-[#212529] font-[PoppinsMedium]'
                >
                  Email
                </label>
                <input
                  required
                  type='email'
                  name='user_email'
                  class='w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-600 text-lg outline-none text-black font-[PoppinsMedium] py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
            </div>
            <div class='p-2 w-full'>
              <div class='relative'>
                <label
                  for='message'
                  class='leading-7 text-[20px] text-[#212529] font-[PoppinsMedium]'
                >
                  Mensaje
                </label>
                <textarea
                  required
                  name='message'
                  class='w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-600 h-32 text-xl outline-none text-black py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out font-[PoppinsMedium]'
                />
              </div>
            </div>
            <div class='p-2 w-full'>
              <button
                type='submit'
                value='Send'
                class='flex mx-auto border-2 border-[#0F74BA] px-5 py-2 rounded-full select-none hover:bg-[#0F74BA] hover:text-white transition duration-300 ease-in-out text-[#0F74BA] font-[PoppinsBold]'
              >
                Enviar Mensaje
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>