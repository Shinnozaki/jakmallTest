Pada page pertama, terdapat form dimana default state dari semua input berupa kosong. Page pertama ini merupakan step 1(default) saat website ini pertama kali di load.
Form ini dijadikan component yang menggunakan react-form-hook dengan mode onchange, sehingga setiap user melakukan perubahan pada input, maka validasi akan ter-update. Validasi form dilakukan pada registerOptions, dimana saat onChange, maka akan dilakukan setState kepada setiap input.
Jika input tidak sesuai dengan validasi, maka error message akan dimunculkan, dan pada styled components, style input akan berubah. Jika input sudah sesuai dengan validasi, maka style input juga akan berubah.
Pada form bagian checkbox dropshipper, default state berupa true. Jika user melakukan perubahan pada checkbox, maka akan dilakukan setState dengan mengubah semua input menjadi empty string, dan melakukan perubahan pada style input. Pada form input dropshipper juga akan dilakukan clearErrors.
Selanjutnya pada komponen summary, state default pada total adalah 500,000. Jika checkbox pada dropshipper true, maka akan dilakukan setState total dijumlahkan dengan 5,900.

Setelah semua komponen sesuai, dan user melakukan submit, Terdapat state pada component step yang akan di increment pada function handleStep, dan akan disimpan pada variabel nextStep, sehingga user dapat melanjutkan ke page 2.
Pada page kedua, terdapat komponen radioGroup dengan value dan option konstan yang akan di map. Saat user memilih salah satu radioButton nya, maka akan dilakukan setStateValue berdasarkan key pada radio button yang dipilih.
Untuk step diatas satu (dua/tiga), Komponen summary pada page kedua akan menampilkan state berupa nama, due dan biaya shipment. Kemudian akan melakukan setState total yang menjumlahkan biaya shipment tersebut. Nama dari payment akan ditampilkan pada button submit dengan cara mengakses variabel payment state tersebut.

Setelah user melakukan submit pada page kedua, maka component step akan melakukan increment pada function handleStep, sehingga user dapat melanjutkan ke page 3
Pada page ketiga, sebuah Order ID akan di generate menggunakan function genId. Lalu dibawahnya, terdapat link "back to homepage" dimana semua inputan user akan dikembalikan ke default state (kosong), dan step kembali ke 1.
Komponen summary pada page kedua akan menampilkan state berupa nama, due dan biaya shipment, payment method, Kemudian akan melakukan setState total yang menjumlahkan biaya shipment tersebut.
