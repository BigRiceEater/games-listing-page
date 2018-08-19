const sampleGame = {
      coverImageUrl : "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcwXbHBmGEy0sI6WRRfI_JyR7CMeBUMjSBMPWSQpd92PN58Qqg4nlSfCUvaaFtGTbYw_3qK9ojPYv2B5JhAJmFDqVs_EcDLB413zJ8Uudqos4K00xN5ACoLDeR7tzgxCSyB53ShT8wcx4_matCAdQt.pkhcewZpDUaakMHmtixxJ4-&h=300&w=200&format=jpg",
      title : "Hitman the greatest assassin",
      price: 230
    };

//const games = Array(10).fill(sampleGame);

const games = [
  {
    coverImageUrl : "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcwXbHBmGEy0sI6WRRfI_JyR7CMeBUMjSBMPWSQpd92PN58Qqg4nlSfCUvaaFtGTbYw_3qK9ojPYv2B5JhAJmFDqVs_EcDLB413zJ8Uudqos4K00xN5ACoLDeR7tzgxCSyB53ShT8wcx4_matCAdQt.pkhcewZpDUaakMHmtixxJ4-&h=300&w=200&format=jpg",
    title : "Hitman",
    price : 300
  },
  {
    coverImageUrl : "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcF.eDZomSCEW5BsVkS0cEuwsns0BEZCPAiv2Y.B28t3jeBCPMZZh7Ts0ypmOBU8.uxRjpv2nAyIuLZlocrmVm7syPWi4L379HznmZK3YZRAMr2WoWDsGfd3zZX6MsUq.C0Jur8akknxmLXQtMT5dSDCD57.gsBEcah.4kao6Z_VA-&h=300&w=200&format=jpg",
    title : "Halo 5: Guardians",
    price : 230
  },
  {
    coverImageUrl : "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc0S1MXQqedrl5ZWQr_R8DsCcFWgIqOIFdsQlbS14WMN5dMMqgnWTdpbZK2giz3tjLiQjgIUhdJ_T3qG8EKIMNir43mHPHe1ysjr8RsBMni0y9S.bRuVGhpwF0ql7bVF9Nc7GYz74xr7M9atzbxRMfFxfA7mAA9UsoAAoOYazK._E-&h=300&w=200&format=jpg",
    title : "The Division",
    price : 150
  },
  {
    coverImageUrl : "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc_VNnbfu6USpGq6KyU62ZLZFyX9_KCf1M7yiXvAkW9jgAwQYY_bTwvOouZP9W_I9qcVeIxCBDDs.0RIVzYyaJMTSmQtCja0re7kRksGtCzLvJUX_SmCbOpK06LULwKrwxpFaJdKvxfzt2rV6Nk_2ca5DhlNTA4CypL2SY0uiY9YI-&h=300&w=200&format=jpg",
    title : "DEAD OR ALIVE 5",
    price : 350
  },
  {
    coverImageUrl : "https://store-images.s-microsoft.com/image/apps.11650.13510798887356280.235dc311-b50e-403c-af16-ceffcc2c2399.99b85445-285f-4bc9-a0ec-53e5c36b1ae3?mode=crop&q=90&h=300&w=200&format=jpg",
    title : "Gears of War 4",
    price : 450
  },
  {
    coverImageUrl : "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcAL_uXqNGDhlNIt0wsKBphnYi_G_lNgvWGjm1ZpEzt6R3irriLguNLLBgd4w9Id6C2YVUUCqrCtxMT31DymDeyCWJSl9_02LfMGjk3f6Ofnw3YysI.WYiPybTsyLW6tcZKtlFmsc2yXY71HCCnuSvHwoJA5odWzuMy8iMt59mkkQ-&h=300&w=200&format=jpg",
    title : "The Witcher 3: Wild Hunt",
    price : 390
  },
  {
    coverImageUrl : "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc38Eq1C_xATsS9hDnsBKymtTbuZVvbZ2rWGuQ9Z7NfVQ.xENKwBFdWJMj2qDE5gbCA9dDIioBF7ecWiX.ffZQIb5Gs7362GcOuu7lC7tZRkOP4927U48upgwnjOUGnqiK9dPLdTU0m.eI7lxxD0IlKCwBA.JdLla957Ik.fqwy64-&h=300&w=200&format=jpg",
    title : "Overcooked 2!",
    price : 99
  },
];

const getGameData = () => games;
