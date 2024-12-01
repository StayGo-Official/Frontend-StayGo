import React from "react";
import Navbar from "./Navbar/Navbar";
import NavbarBanner from "./Navbar/NavbarBanner";
import Footer from "./Footer/Footer";

const SyaratKetentuan = () => {
  return (
    <main>
      <Navbar />
      <NavbarBanner />
      <div className="min-h-screen bg-white">
        {/* Navigation Breadcrumb */}
        <nav className="px-4 py-4 text-sm text-gray-600">
          <div className="container mx-auto">
            <span>Terms and Condition / Syarat dan Ketentuan StayGo</span>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Header */}
          <h1 className="text-4xl font-bold text-center mb-16">
            Syarat dan Ketentuan Penggunaan Aplikasi StayGo
          </h1>

          {/* Privacy Notice Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4 underline">
              PEMBERITAHUAN
            </h2>

            {/* Syarat dan Ketentuan Penggunaan Aplikasi StayGo Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4 underline">
                Syarat dan Ketentuan Penggunaan Aplikasi StayGo
              </h3>

              <p className="text-gray-800 leading-relaxed">
                Syarat dan Ketentuan Penggunaan Aplikasi StayGo (
                <span className="font-semibold">
                  "Syarat dan Ketentuan StayGo"
                </span>
                ) ini mengatur syarat dan ketentuan untuk pengaksesan Aplikasi
                StayGo (sebagaimana didefinisikan di bawah ini) dan/atau
                penggunaan Layanan StayGo (sebagaimana didefinisikan di bawah
                ini) oleh Anda (<span className="font-semibold">"Anda"</span>{" "}
                atau <span className="font-semibold">"Pengguna"</span>).
                Termasuk setiap dan semua Fitur (sebagaimana didefinisikan di
                bawah ini) yang ada di dalamnya yang dikembangkan, dioperasikan,
                dan/atau disediakan oleh StayGo.
              </p>

              <h4 className="text-base font-bold mb-4">
                1. Istilah dan Pengertian
              </h4>

              <p className="text-gray-800 leading-relaxed">
                1.1 <span className="font-bold">Akun </span> berarti kumpulan
                informasi mengenai Anda yang disampaikan kepada StayGo
                sehubungan dengan penggunaan Layanan StayGo yang digunakan oleh
                StayGo untuk membedakan satu Pengguna dari Pengguna lainnya.
                Dalam Akun, Pengguna dapat melakukan pengaturan, melihat riwayat
                transaksi yang dilakukan oleh Pengguna selama menggunakan
                Layanan StayGo dan/atau menyampaikan perubahan Data Pengguna.
              </p>

              <p className="text-gray-900 leading-relaxed">
                1.2 <span className="font-bold">"Anda"</span> atau{" "}
                <span className="font-bold">"Pengguna"</span> merujuk pada orang
                perorangan yang telah mendaftar dan terverifikasi oleh StayGo
                sebagai Pengguna. Untuk menghindari keragu-raguan, sesuai dengan
                konteksnya, Anda merujuk pada setiap pihak yang disebutkan
                sebelumnya yang belum terverifikasi sebagai Pengguna.
              </p>

              <p className="text-gray-900 leading-relaxed">
                1.3 <span className="font-bold">Aplikasi StayGo </span> berarti
                aplikasi yang dikembangkan, dioperasikan, dan/atau disediakan
                oleh StayGo, yang dapat digunakan untuk memesan layanan ojek
                online dan penyewaan kamar kost.
              </p>

              <p className="text-gray-900 leading-relaxed">
                1.4 <span className="font-bold">"Layanan StayGo"</span> merujuk
                pada layanan yang disediakan melalui Aplikasi StayGo, termasuk
                tetapi tidak terbatas pada layanan pemesanan ojek online dan
                penyewaan kamar kost.
              </p>

              <p className="text-gray-900 leading-relaxed">
                1.5 <span className="font-bold">"Fitur"</span> berarti fungsi
                atau kemampuan khusus dalam Layanan StayGo yang diciptakan,
                dikembangkan dan/atau dikelola oleh StayGo, serta dapat
                digunakan, dinikmati, dan/atau dimanfaatkan oleh Pengguna
                melalui Aplikasi StayGo.
              </p>

              <p className="text-gray-900 leading-relaxed">
                1.6 <span className="font-bold">Layanan Ojek Online</span>{" "}
                berarti layanan yang disediakan oleh StayGo untuk memungkinkan
                Pengguna memesan ojek secara online untuk transportasi di
                sekitar Lhokseumawe.
              </p>

              <p className="text-gray-900 leading-relaxed">
                1.7 <span className="font-bold">Layanan Kost</span> berarti
                layanan yang disediakan oleh StayGo untuk memungkinkan Pengguna
                mencari dan menyewa kamar kost di sekitar Lhokseumawe melalui
                Aplikasi StayGo.
              </p>

              <p className="text-gray-900 leading-relaxed">
                1.8 <span className="font-bold">Mitra StayGo</span> berarti
                pihak ketiga yang bekerjasama dengan StayGo untuk menyediakan
                layanan, termasuk pemilik kost dan pengemudi ojek yang terdaftar
                dalam Aplikasi StayGo.
              </p>

              <p className="text-gray-900 leading-relaxed">
                1.9{" "}
                <span className="font-bold">
                  Peraturan Perundang-undangan yang Berlaku
                </span>{" "}
                berarti setiap produk pengaturan pemerintah Indonesia baik di
                tingkat nasional, provinsi, kabupaten, kota madya, dan tingkat
                pemerintahan lokal lainnya serta peraturan instansi-instansi dan
                badan pemerintahan lainnya termasuk kebijakan-kebijakan tertulis
                dan tidak tertulis dari instansi-instansi dan badan-badan
                pemerintahan tersebut.
              </p>

              <p className="text-gray-900 leading-relaxed mb-4">
                1.10 <span className="font-bold">Transaksi Mencurigakan</span>{" "}
                merujuk pada setiap dan semua transaksi yang diketahui dengan
                sendirinya atau melalui laporan dari Mitra StayGo atau pihak
                ketiga manapun, dan/atau yang dinilai berdasarkan diskresi
                StayGo, sebagai transaksi yang diduga melanggar atau mempunyai
                indikasi pelanggaran atas Syarat dan Ketentuan StayGo, syarat
                dan ketentuan Mitra StayGo dan/atau Peraturan Perundang-undangan
                yang Berlaku.
              </p>

              <h4 className="text-base font-bold mb-4">
                2. Pendaftaran Akun dan Proses Verifikasi
              </h4>

              <p className="text-gray-900 leading-relaxed mb-4">
                2.1 Anda harus berusia 17 (tujuh belas) tahun ke atas dan cakap
                secara hukum untuk dapat membuat Akun pada Aplikasi StayGo. Bagi
                Anda yang belum dewasa atau yang berada di bawah pengampuan,
                Anda tidak diperkenankan menggunakan Layanan StayGo tanpa
                pendampingan dan persetujuan wali Anda. Bagi Anda yang
                belum/tidak cakap secara hukum, segala tindakan Anda akan
                menjadi tanggung jawab pengampu dan/atau perwakilan Anda yang
                sah.
              </p>
              <div>
                <p className="text-gray-900 leading-relaxed">
                  2.2 Pembuatan Akun dilakukan dengan cara mendaftarkan diri
                  Anda melalui Aplikasi StayGo dengan menyampaikan informasi
                  sebagai berikut:
                </p>
                <ol className="ml-10" style={{ listStyleType: "lower-alpha" }}>
                  <li>Username</li>
                  <li>Nama Lengkap</li>
                  <li>Email</li>
                  <li>No Telepon</li>
                  <li>Tempat Tanggal Lahir</li>
                  <li>Password</li>
                </ol>
              </div>

              <p className="text-gray-900 leading-relaxed mb-4">
                2.3 StayGo akan mengirimkan OTP melalui Email Anda sesuai dengan
                pilihan Anda untuk dimasukan ke dalam Aplikasi StayGo. Setelah
                memasukan OTP, Anda dapat memesan ojek dan kamar kost
              </p>
              <p className="text-gray-900 leading-relaxed mb-4">
                2.4 StayGo berhak dan berwenang untuk menolak permohonan
                verifikasi Akun Anda apabila hasil verifikasi yang dilakukan
                oleh StayGo atau mitra penyedia layanan menunjukkan bahwa
                informasi yang Anda sampaikan belum benar dan/atau lengkap, atau
                jika StayGo tidak diperkenankan oleh peraturan
                perundang-undangan yang berlaku untuk menyediakan Layanan StayGo
                kepada Anda. StayGo (selama diperbolehkan oleh peraturan
                perundang-undangan yang berlaku) tidak berkewajiban untuk
                memberikan alasan penolakan permohonan verifikasi Akun Anda.
              </p>

              <h4 className="text-base font-bold mb-4">
                3. Ketentuan Umum Penggunaan Akun
              </h4>

              <p className="text-gray-900 leading-relaxed mb-4">
                3.1 Pengguna akan bertanggung jawab sepenuhnya atas keamanan dan
                kerahasiaan Akun beserta Data yang ada di dalamnya, termasuk
                namun tidak terbatas pada, nama Akun, email, kata sandi
                (password), serta kode verifikasi yang dihasilkan dan dikirimkan
                oleh sistem StayGo kepada Pengguna.
              </p>

              <p className="text-gray-900 leading-relaxed mb-4">
                Apabila terdapat indikasi penyalahgunaan atas Akun, Pengguna
                diharuskan untuk segera menghubungi StayGo guna meminta bantuan
                (melalui fitur Kontak di Aplikasi StayGo atau sarana komunikasi
                lainnya yang disediakan oleh StayGo) untuk memeriksa,
                menangguhkan, atau menghentikan penyalahgunaan akses terhadap
                Akun yang relevan.
              </p>

              <p className="text-gray-900 leading-relaxed mb-4">
                3.2 StayGo memiliki hak untuk menangguhkan sebagian atau
                keseluruhan Layanan StayGo, termasuk membekukan Akun, dalam hal
                adanya dugaan, potensi, dan/atau indikasi pelanggaran atas
                Syarat dan Ketentuan StayGo ini, syarat dan ketentuan Mitra
                StayGo (jika berlaku), dan/atau Peraturan Perundang-undangan
                yang Berlaku.
              </p>

              <p className="text-gray-900 leading-relaxed mb-4">
                3.3 StayGo, selama diperbolehkan oleh Peraturan
                Perundang-undangan yang Berlaku, tidak berkewajiban untuk
                memberitahukan alasan menangguhkan sebagian atau keseluruhan
                Layanan StayGo atau pembekuan Akun sebagaimana dimaksud di atas.
              </p>

              <h4 className="text-base font-bold mb-4">
                4. Tindakan-Tindakan yang Dilarang
              </h4>

              <p className="text-gray-900 leading-relaxed mb-4">
                4.1 Pengguna hanya dapat mengakses Aplikasi StayGo dan
                menggunakan Layanan StayGo beserta setiap dan segala Fitur yang
                tersedia untuk kepentingan pribadi dan/atau usaha tanpa
                melanggar Peraturan Perundang-undangan yang Berlaku atau hak
                pihak ketiga manapun.
              </p>
              <div>
                <p className="text-gray-900 leading-relaxed mb-4">
                  Pada saat mengakses Aplikasi StayGo dan/atau menggunakan
                  Layanan StayGo beserta segala Fitur yang ada di dalamnya,
                  Pengguna dilarang untuk:
                </p>
                <ol className="ml-10" style={{ listStyleType: "lower-alpha" }}>
                  <li className="mb-3">
                    dengan sengaja dan tanpa hak atau melawan hukum melakukan
                    intersepsi atau penyadapan atas transmisi informasi
                    elektronik dan/atau dokumen elektronik atau informasi
                    elektronik dan/atau dokumen elektronik milik Pengguna
                    lainnya, Penerima Layanan, atau StayGo;
                  </li>
                  <li className="mb-3">
                    dengan sengaja dan tanpa hak atau melawan hukum dengan cara
                    apapun mengubah, menambah, mengurangi, melakukan transmisi,
                    merusak, menghilangkan, memindahkan atau menyembunyikan
                    suatu informasi elektronik dan/atau dokumen elektronik yang
                    tertera pada Aplikasi StayGo baik yang bersifat pribadi atau
                    publik;
                  </li>
                  <li className="mb-3">
                    dengan sengaja dan tanpa hak atau melawan hukum melakukan
                    tindakan yang berakibat terganggunya akses ke Aplikasi
                    StayGo;
                  </li>
                  <li className="mb-3">
                    dengan sengaja dan tanpa hak atau melawan hukum melakukan
                    sublisensi, memproduksi, menjual, mengadakan untuk digunakan
                    oleh pihak lain, mendistribusikan, menyediakan atau mengakui
                    kepemilikan Aplikasi StayGo, Layanan StayGo, Fitur, Materi,
                    atau hak kekayaan intelektual lainnya milik StayGo;
                  </li>
                  <li className="mb-3">
                    dengan sengaja dan tanpa hak atau melawan hukum melakukan
                    manipulasi, perubahan, penghilangan, pengrusakan sebagian
                    atau seluruh Aplikasi StayGo;
                  </li>
                  <li className="mb-3">
                    menggunakan program atau melakukan sesuatu yang dapat
                    mengakses, mencari atau mendapatkan informasi yang bukan
                    merupakan hak Pengguna dari Aplikasi StayGo;
                  </li>
                  <li className="mb-3">
                    mengganggu keberlangsungan atau merusak server atau jaringan
                    yang terhubung dengan Aplikasi StayGo atau mengabaikan
                    standar prosedur, aturan atau Perundang-undangan yang
                    Berlaku terhadap koneksi internet;
                  </li>
                  <li className="mb-3">
                    mencoba mengakses bagian dari Aplikasi StayGo yang mana
                    Pengguna tidak mempunyai hak untuk melakukan akses
                    terhadapnya;
                  </li>
                  <li className="mb-3">
                    melakukan tindakan plagiarisme atas Materi yang terdapat
                    pada Aplikasi StayGo;
                  </li>
                  <li className="mb-3">
                    melakukan atau berusaha melakukan reverse engineer,
                    dekompilasi, pembongkaran terhadap kode pemrograman atau
                    algoritma atau struktur yang terdapat di dalam Aplikasi
                    StayGo atau yang secara langsung maupun tidak langsung dapat
                    mengganggu atau merusak sistem operasional Aplikasi StayGo;
                  </li>
                  <li className="mb-3">
                    melakukan tindakan apapun, termasuk dalam atau melalui
                    Aplikasi StayGo, yang dapat merusak atau mengganggu reputasi
                    StayGo.
                  </li>
                  <li>
                    menggunakan emulator dan/atau software sejenis lainnya,
                    sepanjang diartikan sebagai alat yang mampu meniru atau
                    emulasi perilaku program atau aplikasi yang kompatibel pada
                    suatu perangkat agar bisa dijalankan pada perangkat lain,
                    dalam mengakses atau menggunakan Aplikasi StayGo, Layanan
                    StayGo, dan/atau Fitur.
                  </li>
                </ol>
              </div>

              <p className="text-gray-900 leading-relaxed mb-4">
                4.2 StayGo memiliki hak untuk menggugat secara perdata maupun
                melakukan proses hukum secara pidana atas seluruh perbuatan yang
                dilarang sebagaimana dimaksud dalam pasal ini maupun Syarat dan
                Ketentuan StayGo ini secara keseluruhan.
              </p>

              <h4 className="text-base font-bold mb-4">
                5. Perlingdungan Data
              </h4>

              <p className="text-gray-900 leading-relaxed mb-4">
                5.1 StayGo akan selalu menjaga data pribadi Pengguna dengan
                mengacu pada Syarat dan Ketentuan StayGo ini serta Peraturan
                Perundang-undangan yang Berlaku.
              </p>

              <p className="text-gray-900 leading-relaxed mb-4">
                5.2 Ketentuan lebih lanjut mengenai keamanan data pribadi
                Pengguna dapat diakses melalui Kebijakan Privasi StayGo yang
                merupakan bagian yang tidak terpisahkan dari Syarat dan
                Ketentuan StayGo ini.
              </p>

              <h4 className="text-base font-bold mb-4">
                6. Pernyataan dan Jaminan
              </h4>

              <p className="text-gray-900 leading-relaxed mb-4">
                6.1 Pengguna merupakan pihak yang cakap secara hukum (tidak
                cacat hukum; termasuk cukup umur sebagaimana dimaksud dalam
                Pasal 2.1), tidak dalam kondisi dipaksa atau diancam (tidak
                cacat kehendak), mempunyai kuasa dan kewenangan untuk sepakat,
                tunduk pada, mengikatkan diri serta melaksanakan seluruh hak dan
                kewajibannya berdasarkan Syarat dan Ketentuan StayGo ini.
              </p>
              <p className="text-gray-900 leading-relaxed mb-4">
                6.2 Dana yang digunakan untuk bertransaksi tidak diperoleh
                secara melawan hukum atau berhubungan dengan tindak pidana
                termasuk namun tidak terbatas pada tindakan pencurian uang,
                penipuan dalam bentuk apapun, pencucian uang, hasil korupsi,
                hasil perjudian, illegal logging, dan tindak pidana lainnya
                berdasarkan Peraturan Perundang-undangan yang Berlaku, serta
                Pengguna memiliki hak atau kewenangan untuk membuat dan/atau
                memberikan Perintah.
              </p>
              <p className="text-gray-900 leading-relaxed mb-4">
                6.3 Seluruh Data baik yang telah Pengguna sampaikan atau
                cantumkan maupun yang akan Pengguna sampaikan atau cantumkan di
                kemudian hari atau dari waktu ke waktu adalah benar, lengkap,
                akurat, terkini dan tidak menyesatkan serta tidak melanggar hak
                (termasuk tetapi tidak terbatas pada hak kekayaan intelektual)
                atau kepentingan pihak manapun. Penyampaian Data oleh Pengguna
                kepada StayGo atau melalui Aplikasi StayGo tidak bertentangan
                dengan Peraturan Perundang-undangan yang Berlaku serta tidak
                melanggar akta, perjanjian, kontrak, kesepakatan atau dokumen
                lain dimana Pengguna merupakan pihak di dalamnya.
              </p>
              <p className="text-gray-900 leading-relaxed mb-4">
                6.4 Pengguna dengan ini bertanggung jawab sepenuhnya atas
                kelengkapan dan kebenaran atas setiap Data yang Pengguna berikan
                kepada StayGo, serta wajib bertanggung jawab secara perdata
                maupun pidana, apabila terdapat pernyataan yang tidak sesuai
                dengan keadaan sebenarnya.
              </p>
              <p className="text-gray-900 leading-relaxed mb-4">
                6.5 Pengguna dengan ini melepaskan StayGo dari segala bentuk
                tanggung jawab dan wajib mengganti seluruh kerugian yang StayGo
                alami atas penggunaan Aplikasi StayGo untuk tindakan yang
                melanggar Peraturan Perundang-undangan yang Berlaku, termasuk
                namun tidak terbatas pada pencurian uang, penipuan dalam bentuk
                apapun, pencucian uang, hasil korupsi, hasil perjudian, illegal
                logging, dan tindak pidana lainnya berdasarkan Peraturan
                Perundang-undangan yang Berlaku.
              </p>
              <p className="text-gray-900 leading-relaxed mb-4">
                6.6 Pengguna memahami dan bertanggung jawab bahwa penggunaan
                Layanan StayGo tidak akan digunakan untuk tujuan yang
                bertentangan dengan Peraturan Perundang-undangan yang Berlaku,
                termasuk namun tidak terbatas pada peraturan perundang-undangan
                tentang tindak pidana pencucian uang dan pendanaan terorisme,
                sehingga Pengguna memahami bahwa segala bentuk kerugian yang
                timbul akibat pelanggaran ketentuan ini akan menjadi tanggung
                jawab Pengguna sepenuhnya.
              </p>

              <h4 className="text-base font-bold mb-4">
                7. Hak Kekayaan Intelektual
              </h4>

              <p className="text-gray-900 leading-relaxed mb-4">
                7.1 Unsur dari masing-masing Aplikasi StayGo, Fitur, nama, nama
                dagang, logo, nuansa, tampilan, tulisan, gambar, video, konten,
                kode pemrograman, layanan dan materi lainnya dan/atau gabungan
                unsur dari hal-hal yang disebutkan sebelumnya yang disediakan
                oleh StayGo (“Materi”) dilindungi oleh hak kekayaan intelektual
                berdasarkan Peraturan Perundang-undangan yang Berlaku. Seluruh
                hak kekayaan intelektual dari Materi adalah milik StayGo
                seluruhnya dan StayGo memberikan Pengguna lisensi non-eksklusif
                yang terbatas, tidak dapat dijual dan tidak dapat dialihkan
                untuk menggunakan Materi semata-mata dan secara wajar untuk
                keperluan melaksanakan Syarat dan Ketentuan StayGo ini.
              </p>
              <p className="text-gray-900 leading-relaxed mb-4">
                7.2 Pengguna dilarang untuk menyalin, mengubah, mencetak,
                mengadaptasi, menerjemahkan, menciptakan karya tiruan dari,
                mendistribusikan, memberi lisensi kepada pihak manapun, menjual,
                memindahkan, menggandakan, membuat karya turunan, menyiarkan
                lewat media online maupun offline, membongkar, atau
                mengeksploitasi bagian mana pun dari Materi untuk keperluannya
                sendiri dan/atau keperluan di luar dari pelaksanaan Syarat dan
                Ketentuan StayGo ini.
              </p>
              <p className="text-gray-900 leading-relaxed mb-4">
                7.3 Jika StayGo menemukan adanya indikasi/dugaan pelanggaran
                Syarat dan Ketentuan StayGo ini khususnya perihal hak kekayaan
                intelektual, StayGo berhak untuk melakukan investigasi lebih
                lanjut, mengakhiri akses Pengguna terhadap Aplikasi StayGo
                beserta Layanan StayGo dan setiap dan segala Fitur yang ada di
                dalamnya, serta melakukan upaya hukum lainnya untuk
                menindaklanjuti indikasi/dugaan pelanggaran tersebut.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </main>
  );
};

export default SyaratKetentuan;
