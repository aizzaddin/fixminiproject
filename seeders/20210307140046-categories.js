'use strict';
const { nanoid } = require('nanoid')

const kategori = {
    ekonomiDanBisnis: {
        id: nanoid(),
        category: 'Ekonomi dan Bisnis'
    },
    teknik: {
        id: nanoid(),
        category: 'Teknik'
    },
    matematikaIpa: {
        id: nanoid(),
        category: 'Matematika dan IPA'
    },
    filsafat: {
        id: nanoid(),
        category: 'Filsafat'
    },
    hukum: {
        id: nanoid(),
        category: 'Hukum'
    },
    ilmuSosialPolitik: {
        id: nanoid(),
        category: 'Ilmu Sosial dan Politik'
    },
    kedokteranIlmuKesehatan: {
        id: nanoid(),
        category: 'Kedokteran dan Ilmu Kesehatan'
    },
    kegunaanIlmuPendidikan: {
        id: nanoid(),
        category: 'Kegunaan dan Ilmu Pendidikan'
    },
    kehutanan: {
        id: nanoid(),
        category: 'Kehutanan'
    },
    Pertanian: {
        id: nanoid(),
        category: 'Pertanian'
    },
    peternakan: {
        id: nanoid(),
        category: 'Peternakan'
    },
    psikologi: {
        id: nanoid(),
        category: 'Psikologi'
    },
    sastraIlmuBudaya: {
        id: nanoid(),
        category: 'Sastra dan Ilmu Budaya'
    }
}

const kategoriArray = []
for (const key in kategori) {
    const element = kategori[key];
    kategoriArray.push({ ...element, createdAt: new Date(), updatedAt: new Date() })
}

const prodi = {
    akuntansi: {
        id: nanoid(),
        departement: 'Akuntansi',
        category_id: kategori.ekonomiDanBisnis.id
    },
    ilmuEkonomi: {
        id: nanoid(),
        departement: 'Ilmu Ekonomi',
        category_id: kategori.ekonomiDanBisnis.id
    },
    manajemen: {
        id: nanoid(),
        departement: 'Manajemen',
        category_id: kategori.ekonomiDanBisnis.id
    },
    teknikElektro: {
        id: nanoid(),
        departement: 'Teknik Elektro',
        category_id: kategori.teknik.id 
    },
    teknikFisika: {
        id: nanoid(),
        departement: 'Teknik Fisika',
        category_id: kategori.teknik.id
    },
    teknikIndustri: {
        id: nanoid(),
        departement: 'Teknik Industri',
        category_id: kategori.teknik.id
    },
    teknikSipil: {
        id: nanoid(),
        departement: 'Teknik Sipil',
        category_id: kategori.teknik.id
    },
    fisika: {
        id: nanoid(),
        departement: 'Fisika',
        category_id: kategori.matematikaIpa.id
    },
    kimia: {
        id: nanoid(),
        departement: 'Kimia',
        category_id: kategori.matematikaIpa.id
    },
    matematika: {
        id: nanoid(),
        departement: 'Matematika',
        category_id: kategori.matematikaIpa.id
    },
    statistika: {
        id: nanoid(),
        departement: 'Statistika',
        category_id: kategori.matematikaIpa.id
    },
    ilmuKomputer: {
        id: nanoid(),
        departement: 'Ilmu Komputer',
        category_id: kategori.matematikaIpa.id
    },
    geofisika: {
        id: nanoid(),
        departement: 'Geofisika',
        category_id: kategori.matematikaIpa.id
    },
    filsafatt: {
        id: nanoid(),
        departement: 'Filsafat',
        category_id: kategori.filsafat.id
    },
    Hukumm: {
        id: nanoid(),
        departement: 'Hukum',
        category_id: kategori.hukum.id 
    },
    hubunganInter: {
        id: nanoid(),
        departement: 'Hubungan Internasional',
        category_id: kategori.ilmuSosialPolitik.id
    },
    kedokteran: {
        id: nanoid(),
        departement: 'Kedokteran',
        category_id: kategori.kedokteranIlmuKesehatan.id
    },
    ilmuKeperawatan: {
        id: nanoid(),
        departement: 'Ilmu Keperawatan',
        category_id: kategori.kedokteranIlmuKesehatan.id
    },
    giziKesehatan: {
        id: nanoid(),
        departement: 'Gizi Kesehatan',
        category_id: kategori.kedokteranIlmuKesehatan.id
    },
    pendidikanSd: {
        id: nanoid(),
        departement: 'Pendidikan Sekolah Dasar',
        category_id: kategori.kegunaanIlmuPendidikan.id
    },
    kehutanann: {
        id: nanoid(),
        departement: 'Kehutanan',
        category_id: kategori.kehutanan.id
    },
    agronomi: {
        id: nanoid(),
        departement: 'Agronomi',
        category_id: kategori.Pertanian.id
    },
    ilmuTanah: {
        id: nanoid(),
        departement: 'Ilmu Tanah',
        category_id: kategori.Pertanian.id
    },
    proteksiTanaman: {
        id: nanoid(),
        departement: 'Proteksi Tanaman',
        category_id: kategori.Pertanian.id
    },
    ilmuIndustriPeternakan: {
        id: nanoid(),
        departement: 'Ilmu dan Industri Peternakan',
        category_id: kategori.peternakan.id
    },
    psikologii: {
        id: nanoid(),
        departement: 'Psikologi',
        category_id: kategori.psikologi.id
    },
    antropologiBudaya: {
        id: nanoid(),
        departement: 'Antropologi Budaya',
        category_id: kategori.sastraIlmuBudaya.id
    },
    arkeologi: {
        id: nanoid(),
        departement: 'Arkeologi',
        category_id: kategori.sastraIlmuBudaya.id
    },
    sastraArab: {
        id: nanoid(),
         departement: 'Sastra Arab',
        category_id: kategori.sastraIlmuBudaya.id
    }
}

const prodiArray = []
for (const key in prodi) {
    const element = prodi[key];
    prodiArray.push({ ...element, createdAt: new Date(), updatedAt: new Date() })
}

const matkul = {
    akuntansiPengantar: {
        id: nanoid(),
        course: 'Akuntansi Pengantar',
        departement_id: prodi.akuntansi.id
    },
    matematikaEkonomi: {
        id: nanoid(),
        course: 'Matematika Ekonomi',
        departement_id: prodi.akuntansi.id
    },
    bisnisPengantar: {
        id: nanoid(),
        course: 'Bisnis Pengantar',
        departement_id: prodi.akuntansi.id
    },
    pengantarEkonomi: {
        id: nanoid(),
        course: 'Pengantar Ekonomi',
        departement_id: prodi.ilmuEkonomi.id
    },
    statistikaEkonomi: {
        id: nanoid(),
        course: 'Statistika Ekonomi',
        departement_id: prodi.ilmuEkonomi.id
    },
    Mikroekonomika: {
        id: nanoid(),
        course: 'Akuntansi Pengantar',
        departement_id: prodi.ilmuEkonomi.id
    },
    makroekonomika: {
        id: nanoid(),
        course: 'Akuntansi Pengantar',
        departement_id: prodi.ilmuEkonomi.id
    },
    akuntansiPengantarr: {
        id: nanoid(),
        course: 'Akuntansi Pengantar',
        departement_id: prodi.manajemen.id
    },
    manajemenKeuangan: {
        id: nanoid(),
        course: 'Manajemen Keuangan',
        departement_id: prodi.manajemen.id
    },
    ManajemenSdm: {
        id: nanoid(),
        course: 'Manajemen SDM',
        departement_id: prodi.manajemen.id
    },
    elektronikaDasar: {
        id: nanoid(),
        course: 'Elektronika Dasar',
        departement_id: prodi.teknikElektro.id
    },
    matematikaElektro: {
        id: nanoid(),
        course: 'Matematika Elektro',
        departement_id: prodi.teknikElektro.id
    },
    fisikaElektro: {
        id: nanoid(),
        course: 'Fisika Elektro',
        departement_id: prodi.teknikElektro.id
    },
    aljabarLinier: {
        id: nanoid(),
        course: 'Aljabar Linier',
        departement_id: prodi.teknikFisika.id
    },
    fisikaAtom: {
        id: nanoid(),
        course: 'Fisika Atom',
        departement_id: prodi.teknikFisika.id
    },
    fisikaMaterial: {
        id: nanoid(),
        course: 'Fisika Material',
        departement_id: prodi.teknikFisika.id
    },
    pengantarTeknikIndustri: {
        id: nanoid(),
        course: 'Pengantar Teknik Industri',
        departement_id: prodi.teknikIndustri.id
    },
    elemenMesin: {
        id: nanoid(),
        course: 'Elemen Mesin',
        departement_id: prodi.teknikIndustri.id
    },
    ergonomikaIndustri: {
        id: nanoid(),
        course: 'Ergonomika Industri',
        departement_id: prodi.teknikIndustri.id
    },
    pengantarTeknikTransportasi: {
        id: nanoid(),
        course: 'Pengantar Teknik Transportasi',
        departement_id: prodi.teknikSipil.id
    },
    geomatika: {
        id: nanoid(),
        course: 'Geomatika',
        departement_id: prodi.teknikSipil.id
    },
    ilmuLingkungan: {
        id: nanoid(),
        course: 'Ilmu Lingkungan',
        departement_id: prodi.teknikSipil.id
    },
    fisikaDasar: {
        id: nanoid(),
        course: 'Fisika Dasar',
        departement_id: prodi.fisika.id
    },
    kalkulus: {
        id: nanoid(),
        course: 'Kalkulus',
        departement_id: prodi.fisika.id
    },
    Termodinamika: {
        id: nanoid(),
        course: 'Termodinamika',
        departement_id: prodi.fisika.id
    },
    kimiaDasar: {
        id: nanoid(),
        course: 'Kimia Dasar',
        departement_id: prodi.kimia.id
    },
    kalkuluss: {
        id: nanoid(),
        course: 'Kalkulus',
        departement_id: prodi.kimia.id
    },
    elektrokimia: {
        id: nanoid(),
        course: 'Elektrokimia',
        departement_id: prodi.kimia.id
    },
    kalkulusss: {
        id: nanoid(),
        course: 'Kalkulus',
        departement_id: prodi.matematika.id
    },
    pengantarTeoriBil: {
        id: nanoid(),
        course: 'Pengantar Teori Bilangan',
        departement_id: prodi.matematika.id
    },
    aljabarLinierr: {
        id: nanoid(),
        course: 'Aljabar Linier',
        departement_id: prodi.matematika.id
    },
    metodeStatistika: {
        id: nanoid(),
        course: 'Metode Statistika',
        departement_id: prodi.statistika.id
    },
    kalkulussss: {
        id: nanoid(),
        course: 'Kalkulus',
        departement_id: prodi.statistika.id
    },
    metodeSurveiSampel: {
        id: nanoid(),
        course: 'Metode Survei Sampel',
        departement_id: prodi.statistika.id
    },
    pemrograman: {
        id: nanoid(),
        course: 'Pemrograman',
        departement_id: prodi.ilmuKomputer.id
    },
    logikaInformatika: {
        id: nanoid(),
        course: 'Logika Informatika',
        departement_id: prodi.ilmuKomputer.id
    },
    sistemDigital: {
        id: nanoid(),
        course: 'Sistem Digital',
        departement_id: prodi.ilmuKomputer.id
    },
    pengantarGeofisika: {
        id: nanoid(),
        course: 'Pengantar Geofisika',
        departement_id: prodi.geofisika.id
    },
    konsepFisika: {
        id: nanoid(),
        course: 'Konsep Fisika',
        departement_id: prodi.geofisika.id
    },
    kimiaKontektual: {
        id: nanoid(),
        course: 'Kimia Kontektual',
        departement_id: prodi.geofisika.id
    },
    filsafattt: {
        id: nanoid(),
        course: 'filsafat',
        departement_id: prodi.filsafatt.id
    },
    hukummm: {
        id: nanoid(),
        course: 'Hukum',
        departement_id: prodi.Hukumm.id
    },
    hubunganInternasional: {
        id: nanoid(),
        course: 'Hubungan Internasional',
        departement_id: prodi.hubunganInter.id
    },
    biologi: {
        id: nanoid(),
        course: 'Biologi',
        departement_id: prodi.kedokteran.id
    },
    pratikDonor: {
        id: nanoid(),
        course: 'Praktik Donor Darah',
        departement_id: prodi.ilmuKeperawatan.id
    },
    giziSeimbang: {
        id: nanoid(),
        course: 'Gizi Seimbang',
        departement_id: prodi.giziKesehatan.id
    },
    pendidikanAgama: {
        id: nanoid(),
        course: 'Pendidikan Agama',
        departement_id: prodi.pendidikanSd.id
    },
    konsepKehutanan: {
        id: nanoid(),
        course: 'Konsep Kehutanan',
        departement_id: prodi.kehutanann.id
    },
    pengantarAgronomi: {
        id: nanoid(),
        course: 'Pengantar Agronomi',
        departement_id: prodi.agronomi.id
    },
    kesuburanTanah: {
        id: nanoid(),
        course: 'Kesuburan Tanah',
        departement_id: prodi.ilmuTanah.id
    },
    pemeliharaanTanaman: {
        id: nanoid(),
        course: 'Pemeliharaan Tanaman',
        departement_id: prodi.proteksiTanaman.id
    },
    teoriTernakLele: {
        id: nanoid(),
        course: 'Teori Ternak Lele',
        departement_id: prodi.ilmuIndustriPeternakan.id
    },
    kesehatanMental: {
        id: nanoid(),
        course: 'Kesehatan Mental',
        departement_id: prodi.psikologii.id
    },
    pengantarAntropologi: {
        id: nanoid(),
        course: 'Pengantar Antropologi Budaya',
        departement_id: prodi.antropologiBudaya.id
    },
    ilmuBatu: {
        id: nanoid(),
        course: 'Ilmu Batu',
        departement_id: prodi.arkeologi.id
    },
    kesastraan: {
        id: nanoid(),
        course: 'Kesastraan',
        departement_id: prodi.sastraArab.id
    },
}

const matkulArray = []
for (const key in matkul) {
    const element = matkul[key];
    matkulArray.push({ ...element, createdAt: new Date(), updatedAt: new Date() })
}

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Categories', kategoriArray, {});
        await queryInterface.bulkInsert('Departements', prodiArray, {});
        await queryInterface.bulkInsert('Courses', matkulArray, {});
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Categories', null, {});
        await queryInterface.bulkDelete('Departements', null, {});
        await queryInterface.bulkDelete('Courses', null, {});
    }
};