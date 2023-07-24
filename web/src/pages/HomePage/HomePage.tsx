import { Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {/* Puskesmas Kecamatan Kepulauan Seribu Utara */}
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 pt-20 pb-8 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            {/* <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Puskesmas Kecamatan <br />
              Kepulauan Seribu Utara.
            </h1> */}
            {/* <h4 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-3xl">
              Puskesmas Kecamatan Kepulauan Seribu Utara.
            </h4> */}

            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-3xl">
              Puskesmas Kecamatan{' '}
              <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
                Kepulauan Seribu Utara.
              </span>{' '}
            </h1>

            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-sm">
              Pusat Kesehatan Masyarakat (Puskesmas) Kecamatan Kepulauan Seribu
              Utara adalah fasilitas pelayanan kesehatan yang menyelenggarakan
              upaya kesehatan masyarakat dan upaya kesehatan perseorangan
              tingkat pertama, dengan lebih mengutamakan upaya promotif dan
              preventif di wilayah kerjanya.{' '}
            </p>
            {/* <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                href="https://wa.me/+6287780773731"
                className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-auto"
              >
                Berobat Online
              </a>
              <a
                href="https://wa.me/+6287780773739"
                className="mb-2 mr-2 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
              >
                Hotline Puskesmas
              </a>
            </div> */}
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
            <img src="/pkc.jpg" alt="Puskesmas" />
          </div>
        </div>
      </section>
      {/* pelayanan kesehatan */}
      <section className="bg-gray-100 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:px-6 lg:pb-24 ">
          <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:mb-8 lg:text-3xl">
            Shortcut
          </h2>

          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Pendaftaran Online</button>
            <a
              href="https://wa.me/+6287780773739"
              className="inline-flex w-full items-center bg-blue-500 text-white justify-center rounded-lg border border-gray-200 px-5 py-3 text-center text-sm font-medium hover:bg-blue-300 focus:ring-4 focus:ring-blue-500 sm:w-auto"
            >
              Hotline Puskesmas
            </a>
            <a
              href="http://www.siapnikah.org/"
              className="inline-flex w-full items-center bg-blue-500 text-white justify-center rounded-lg border border-gray-200 px-5 py-3 text-center text-sm font-medium hover:bg-blue-300 focus:ring-4 focus:ring-blue-500 sm:w-auto"
            >
              Bimbingan Pernikahan
            </a>
          </div>
        </div>
      </section>
      {/* berita dan Pengumuman */}
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 pt-2 pb-8 lg:grid-cols-2 lg:gap-8 lg:py-8 lg:pt-3 xl:gap-0">
          <div className="mx-auto grid">
            <h1>Berita</h1>
            <div className="rounded-lg bg-white px-4">
              <ArticlesCell />
            </div>
          </div>
          <div className="mx-auto grid">
            <h1>Pengumuman</h1>
            <div className="rounded-lg bg-white px-4">
              <Link to="#">
                <h1>Noteworthy technology acquisitions 2021</h1>
              </Link>
              <p className="max-w-2xl text-justify font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-2 lg:text-sm">
                Pusat Kesehatan Masyarakat (Puskesmas) Kecamatan Kepulauan
                Seribu Utara adalah fasilitas pelayanan kesehatan yang
                menyelenggarakan upaya kesehatan masyarakat dan upaya kesehatan
                perseorangan
              </p>
            </div>
            <div className="rounded-lg bg-white px-4">
              <Link to="#">
                <h1>Noteworthy technology acquisitions 2021</h1>
              </Link>
              <p className="max-w-2xl text-justify font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-2 lg:text-sm">
                Pusat Kesehatan Masyarakat (Puskesmas) Kecamatan Kepulauan
                Seribu Utara adalah fasilitas pelayanan kesehatan yang
                menyelenggarakan upaya kesehatan masyarakat dan upaya kesehatan
                perseorangan
              </p>
            </div>
            <div className="rounded-lg bg-white px-4">
              <Link to="#">
                <h1>Noteworthy technology acquisitions 2021</h1>
              </Link>
              <p className="max-w-2xl text-justify font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-2 lg:text-sm">
                Pusat Kesehatan Masyarakat (Puskesmas) Kecamatan Kepulauan
                Seribu Utara adalah fasilitas pelayanan kesehatan yang
                menyelenggarakan upaya kesehatan masyarakat dan upaya kesehatan
                perseorangan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* alur pelayanan */}
      {/* <section className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:px-6 lg:pb-24 ">
          <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:mb-8 lg:text-3xl">
            Alur Pelayanan Puskesmas
          </h2>

          <div className="mx-auto max-w-screen-md">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Pelayanan Kesehatan</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <img
                      src="/alur-pelayanan-kesehatan-puskesmas.png"
                      alt="Puskesmas"
                    />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Penanganan Pengaduan</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <img
                      src="/alur-pelayanan-kesehatan-puskesmas.png"
                      alt="Puskesmas"
                    />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Pelayanan Calon Pengantin</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <img
                      src="/alur-pelayanan-kesehatan-puskesmas.png"
                      alt="Puskesmas"
                    />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </section> */}
      {/* FAQ */}
      {/* <section className="bg-gray-100 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:px-6 lg:pb-24 ">
          <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:mb-8 lg:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mx-auto max-w-screen-md">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Apa saja kegiatan pokok yang ada di Puskesmas?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Kegiatan-kegiatan utama kesehatan Iingkungan yang dilakukan
                    staf puskesmas adalah: Penyehatan air bersih. Penyehatan
                    pembuangan kotoran. Penyehatan lingkungan perumahan.
                    Penyehatan air buangan/limbah. Pengawasan sanitasi tempat
                    umum. Penyehatan makanan dan minuman. Pelaksanaan peraturan
                    perundangan.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Program pokok Puskesmas ada berapa?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Program puskesmas terdiri dari program kesehatan dasar yaitu
                    Program Promosi Kesehatan, Program Kesehatan Ibu dan Anak,
                    Program keluarga Berencana, Program Pemberantasan Penyakit
                    Menular, Program Peningkatan Gizi, Program Kesehatan
                    Lingkungan, Program Pengobatan, dan program kesehatan
                    pengembangan yaitu Program Penyuluhan Kesehatan Masyarakat,
                    program Laboratorium, Program Kesehatan Sekolah, Program
                    Perawatan Kesehatan Masyarakat, Program Kesehatan Jiwa, dan
                    Program Kesehatan Gigi.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>
                      Saipa saja yang dapat berobat di Puskesmas Kecamatan
                      Kepulauan Seribu Utara​?
                    </span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Seluruh masyarakat yang lokasi faskesnya di Kepulauan Seribu
                    Utara dan seluruh warga masyarakat dengan jumlah kunjungan
                    maksimal 3 kali.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>
                      Siapa saja petugas yang melakukan palayanan kesehatan di
                      Puskesmas Kecamatan Kepulauan Seribu Utara?
                    </span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <b>PETUGAS MEDIS</b>
                    <ul>
                      <li>
                        Dokter Umum : melakukan pelayanan medis di poli umum,
                        puskel, poskes, posyandu
                      </li>
                      <li>
                        Dokter Gigi : melaksanakan pelayanan medis di poli gigi,
                        puskel, poskes
                      </li>
                      <li>
                        Dokter Gigi : melaksanakan pelayanan medis di poli gigi,
                        puskel, poskes
                      </li>
                    </ul>
                    <br />
                    <b>PETUGAS PARA MEDIS</b>
                    <ul>
                      <li>
                        Bidan : pelayanan kesehatan ibu dan anak (KIA),
                        pelaksana asuhan kebidanan
                      </li>
                      <li>
                        Perawat Umum : pendamping tugas dokter umum, pelaksana
                        asuhan keperawatan umum
                      </li>
                      <li>
                        Perawat Gigi : pendamping tugas dokter gigi, pelaksana
                        asuhan keperawatan gigi
                      </li>
                      <li>
                        Perawat Gizi : pelayanan penimbangan dan pelacakan
                        masalah gizi masyarakat
                      </li>
                      <li>
                        Sarjana Farmasi : pelayanan kesehatan obat dan
                        perlengkapan kesehatan
                      </li>
                      <li>
                        Sarjana Kesehatan Masyrakat : pelayanan administrasi,
                        penyuluhan, pencegahan dan pelacakan masalah kesehatan
                        masyarakat
                      </li>
                    </ul>
                    <br />
                    <b>PETUGAS NON MEDIS</b>
                    <ul>
                      <li>
                        Administrasi : pelayanan administrasi pencatatan dan
                        pelaporan kegiatan puskesmas
                      </li>
                      <li>
                        Petugas Kebersihan : melakukan kegiatan kebersihan
                        ruangan dan lingkungan puskesmas
                      </li>
                      <li>
                        Petugas Keamanan : menjaga keamanan pelayanan khususnya
                        ruangan rawat inap
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default HomePage
