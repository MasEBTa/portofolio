# portofolio
My portofolio collection

Panduan pembuatan aplikasi web belajar online dengan ES6, Custom Element, NPM, Module Bundler, dan AJAX adalah sebagai berikut:

## Tahap 1: Membuat struktur proyek

1. Buatlah direktori baru dengan nama "belajar-online".
2. Buatlah file index.html pada direktori tersebut.
3. Buatlah direktori baru dengan nama "src".
4. Buatlah file index.js pada direktori "src".
5. Buatlah direktori baru dengan nama "components" pada direktori "src".
6. Buatlah file baru pada direktori "components" dengan nama "courses-list.js" dan "course-item.js".

Struktur proyek seharusnya terlihat seperti ini:

```
belajar-online/
├── src/
│   ├── components/
│   │   ├── courses-list.js
│   │   └── course-item.js
│   └── index.js
└── index.html
```

## Tahap 2: Menerapkan tampilan aplikasi yang menarik

1. Buatlah desain tampilan aplikasi menggunakan CSS dan Bootstrap.
2. Tambahkan file "style.css" pada direktori "src".
3. Import file "style.css" ke file "index.js".

Implementasi CSS:

```css
body {
  font-family: 'Open Sans', sans-serif;
}

.card {
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #F0F0F0;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}

.card-body {
  padding: 10px;
}

.btn {
  background-color: #FFC107;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.btn:hover {
  background-color: #FFB900;
}

.form-control {
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 2rem;
}
```

Implementasi Bootstrap:

Tambahkan link CSS dan JavaScript untuk Bootstrap di file "index.html".

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Belajar Online</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./src/style.css">
  </head>
  <body>
    <div class="container mt-5">
      <h1 class="text-center">Belajar Online</h1>
      <div class="card">
        <div class="card-header">
          Pilih kursus yang ingin dipelajari
        </div>
        <div class="card-body">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Cari kurs
```

Lanjutan dari tahap 2:

3. Buatlah custom element untuk menampilkan daftar kursus yang tersedia.
4. Buatlah custom element untuk menampilkan detail dari setiap kursus.

Implementasi Custom Element:

Buatlah file "courses-list.js" pada direktori "components".

```javascript
class CoursesList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="row">
        <course-item title="Belajar HTML" author="John Doe" price="Rp 100.000"></course-item>
        <course-item title="Belajar CSS" author="John Doe" price="Rp 150.000"></course-item>
        <course-item title="Belajar JavaScript" author="John Doe" price="Rp 200.000"></course-item>
      </div>
    `;
  }
}

customElements.define('courses-list', CoursesList);
```

Buatlah file "course-item.js" pada direktori "components".

```javascript
class CourseItem extends HTMLElement {
  constructor() {
    super();
    this.title = this.getAttribute('title');
    this.author = this.getAttribute('author');
    this.price = this.getAttribute('price');
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">${this.author}</p>
            <p class="card-text">${this.price}</p>
            <button class="btn btn-primary">Beli</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('course-item', CourseItem);
```

Tambahkan custom element pada file "index.html".

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Belajar Online</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./src/style.css">
  </head>
  <body>
    <div class="container mt-5">
      <h1 class="text-center">Belajar Online</h1>
      <courses-list></courses-list>
    </div>

    <script src="./dist/bundle.js"></script>
  </body>
</html>
```

## Tahap 3: Menggunakan package pihak ke-3

1. Install package Lodash dan Axios menggunakan NPM.
2. Import package Lodash dan Axios pada file "index.js".
3. Gunakan package Axios untuk melakukan request ke API yang akan digunakan.

Implementasi NPM:

Buka terminal dan jalankan perintah berikut:

```bash
npm install lodash axios --save
```

Implementasi package Lodash dan Axios:

Tambahkan import statement pada file "index.js".

```javascript
import _ from 'lodash';
import axios from 'axios';
```

Gunakan package Axios untuk melakukan request ke API.

```javascript
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Tahap 4: Menggunakan module bundler

Lanjutan dari Tahap 4:

1. Install webpack dan webpack-cli menggunakan NPM.
2. Buatlah file "webpack.config.js" pada root direktori.
3. Konfigurasikan webpack pada file "webpack.config.js".
4. Jalankan perintah "webpack" pada terminal untuk membuild project.

Implementasi Webpack:

Buka terminal dan jalankan perintah berikut:

```bash
npm install webpack webpack-cli --save-dev
```

Buatlah file "webpack.config.js" pada root direktori.

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
```

Konfigurasikan babel pada file "package.json".

```json
{
  "name": "belajar-online",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack --mode development",
    "build": "webpack --mode production"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.15.8",
    "@babel/preset-env": "^7.15.8",
    "babel-loader": "^8.2.3",
    "webpack": "^5.58.2",
    "webpack-cli": "^4.9.1"
  },
  "dependencies": {
    "axios": "^0.24.0",
    "lodash": "^4.17.21"
  }
}
```

Jalankan perintah "webpack" pada terminal untuk membuild project.

```bash
npm run build
```

Setelah menjalankan perintah tersebut, file "bundle.js" akan dibuat pada direktori "dist". File tersebut adalah file hasil bundling dari seluruh modul yang ada pada aplikasi.

Lanjutan dari Tahap 5:

1. Membuat AJAX request menggunakan Axios pada aplikasi.
2. Menampilkan data hasil request pada halaman aplikasi menggunakan Custom Element.

Implementasi AJAX request menggunakan Axios:

Pertama-tama, install package Axios dengan menjalankan perintah berikut pada terminal:

```bash
npm install axios --save
```

Setelah itu, buatlah file baru pada direktori "src" dengan nama "api.js". File ini akan berisi kode yang akan mengambil data dari API menggunakan Axios.

```javascript
import axios from 'axios';

export const getData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
```

Pada kode di atas, kita mengimpor Axios dan mengekspor sebuah fungsi bernama "getData". Fungsi ini akan mengambil data dari API "https://jsonplaceholder.typicode.com/todos" menggunakan metode GET. Setelah data berhasil diambil, fungsi akan mengembalikan data dalam bentuk array.

Selanjutnya, buatlah sebuah Custom Element baru pada file "app.js" untuk menampilkan data yang telah diambil dari API.

```javascript
import { getData } from './api.js';

class AppElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    this.shadowRoot.appendChild(container);

    const title = document.createElement('h1');
    title.textContent = 'Belajar Online';
    container.appendChild(title);

    const list = document.createElement('ul');
    container.appendChild(list);

    getData().then(data => {
      data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.title;
        list.appendChild(listItem);
      });
    });
  }
}

customElements.define('app-element', AppElement);
```

Pada kode di atas, kita membuat sebuah Custom Element bernama "AppElement". Konstruktor dari Custom Element ini akan menambahkan sebuah "shadow root" dan menambahkan beberapa elemen HTML ke dalamnya, yaitu judul halaman dan sebuah daftar. Setelah itu, kita memanggil fungsi "getData" dari file "api.js" untuk mengambil data dari API. Ketika data berhasil diambil, kita melakukan iterasi pada setiap item dalam data dan menambahkan elemen list item pada daftar yang telah dibuat.

Terakhir, kita perlu menambahkan Custom Element ke dalam halaman HTML. Buatlah file "index.html" pada direktori "public" dan tambahkan kode berikut:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Belajar Online</title>
  <script src="../dist/bundle.js"></script>
</head>
<body>
  <app-element></app-element>
</body>
</html>
```

Kode di atas akan menambahkan Custom Element "AppElement" ke dalam halaman HTML dan memuat file "bundle.js" yang telah dihasilkan oleh webpack. Setelah itu, buka halaman "index.html" pada browser dan data yang telah diambil dari API akan ditampilkan pada halaman aplikasi.

Lanjutan dari Tahap 6:

1. Mengoptimalkan bundle aplikasi menggunakan Webpack.

Untuk mengoptimalkan bundle aplikasi, kita dapat menggunakan beberapa fitur pada Webpack seperti minifying dan splitting chunks. Berikut adalah langkah-langkah untuk mengoptimalkan bundle aplikasi menggunakan Webpack:

1. Install package "terser-webpack-plugin" untuk melakukan minifying pada bundle aplikasi.

```bash
npm install terser-webpack-plugin --save-dev
```

2. Edit file "webpack.config.js" untuk menambahkan plugin "terser-webpack-plugin".

```javascript
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
};
```

Pada kode di atas, kita menambahkan plugin "TerserPlugin" pada bagian "optimization" dari konfigurasi Webpack. Plugin ini akan melakukan minifying pada bundle aplikasi. Selain itu, kita juga menambahkan opsi "parallel: true" pada plugin untuk melakukan proses minifying secara paralel.

Kita juga menambahkan opsi "splitChunks" pada konfigurasi Webpack. Opsi ini akan memisahkan kode dari dependensi yang digunakan pada aplikasi ke dalam file terpisah. Hal ini akan meningkatkan performa aplikasi karena pengguna hanya perlu memuat dependensi yang diperlukan untuk halaman tertentu saja.

3. Jalankan perintah "npm run build" pada terminal untuk menghasilkan bundle aplikasi yang telah dioptimalkan.

```bash
npm run build
```

Setelah perintah di atas dijalankan, Webpack akan menghasilkan bundle aplikasi yang telah dioptimalkan dengan menggunakan plugin "TerserPlugin" dan opsi "splitChunks".

Dengan mengoptimalkan bundle aplikasi menggunakan Webpack, kita dapat meningkatkan performa dan kecepatan aplikasi.

Lanjutan dari Tahap 7:

1. Menerapkan AJAX untuk mengambil data dari server.

Untuk menerapkan AJAX, kita dapat menggunakan package "axios" yang telah diinstall sebelumnya. Berikut adalah langkah-langkah untuk menerapkan AJAX menggunakan "axios":

1. Buat file "data.js" pada folder "src" untuk menyimpan kode yang akan digunakan untuk mengambil data dari server menggunakan "axios".

```javascript
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export const getData = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
```

Pada kode di atas, kita membuat fungsi "getData" yang akan mengambil data dari server menggunakan "axios". Fungsi ini mengembalikan data yang berhasil diambil dari server atau menampilkan pesan error jika terjadi kesalahan pada saat mengambil data.

2. Edit file "index.js" pada folder "src" untuk menggunakan fungsi "getData" yang telah dibuat.

```javascript
import { getData } from './data';

const postList = document.querySelector('#post-list');

const renderPost = (post) => {
  const postElement = document.createElement('li');
  postElement.textContent = post.title;
  postList.appendChild(postElement);
};

getData().then((data) => {
  data.forEach((post) => {
    renderPost(post);
  });
});
```

Pada kode di atas, kita menggunakan fungsi "getData" untuk mengambil data dari server menggunakan "axios". Setelah data berhasil diambil, kita menjalankan fungsi "renderPost" untuk menampilkan setiap data post pada halaman web.

Dengan menerapkan AJAX menggunakan "axios", kita dapat mengambil data dari server secara dinamis dan menampilkan data tersebut pada halaman web.

2. Menambahkan custom element pada aplikasi.

Untuk menambahkan custom element pada aplikasi, kita dapat menggunakan fitur "Custom Element" pada JavaScript. Berikut adalah langkah-langkah untuk menambahkan custom element pada aplikasi:

1. Buat file "post-list.js" pada folder "src/components" untuk membuat custom element "post-list".

```javascript
class PostList extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    const postList = document.createElement('ul');
    postList.setAttribute('id', 'post-list');
    shadowRoot.appendChild(postList);
  }
}

customElements.define('post-list', PostList);
```

Pada kode di atas, kita membuat class "PostList" yang merupakan turunan dari class "HTMLElement". Class ini digunakan untuk membuat custom element "post-list". Pada constructor class, kita membuat elemen "ul" dengan id "post-list" dan menambahkannya ke dalam shadow root.

Kita juga menggunakan method "customElements.define" untuk mendefinisikan custom element "post-list" yang telah dibuat.

2. 3. Edit file "index.html" untuk menambahkan custom element "post-list" pada halaman web.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Belajar Online</title>
  </head>
  <body>
    <header>
      <h1>Belajar Online</h1>
    </header>
    <main>
      <post-list></post-list>
    </main>

    <script src="./dist/main.js"></script>
  </body>
</html>
```

Pada kode di atas, kita menambahkan custom element "post-list" pada elemen "main" pada halaman web.

Dengan menambahkan custom element pada aplikasi, kita dapat memisahkan antara logika tampilan dan logika aplikasi, sehingga membuat kode menjadi lebih modular dan mudah dipelihara.

3. Menjalankan aplikasi menggunakan webpack dev server.

Untuk menjalankan aplikasi menggunakan webpack dev server, kita dapat menggunakan package "webpack-dev-server". Berikut adalah langkah-langkah untuk menjalankan aplikasi menggunakan webpack dev server:

1. Edit file "package.json" untuk menambahkan script "start" yang digunakan untuk menjalankan aplikasi menggunakan webpack dev server.

```json
{
  "name": "belajar-online",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.15.5",
    "@babel/preset-env": "^7.15.6",
    "babel-loader": "^8.2.2",
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.3.0",
    "html-webpack-plugin": "^5.3.2",
    "style-loader": "^3.3.1",
    "webpack": "^5.58.2",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.3.1"
  },
  "dependencies": {
    "axios": "^0.24.0",
    "lodash": "^4.17.21"
  }
}
```

Pada kode di atas, kita menambahkan script "start" yang digunakan untuk menjalankan aplikasi menggunakan webpack dev server.

2. Jalankan perintah "npm start" pada terminal untuk menjalankan aplikasi menggunakan webpack dev server.

Setelah menjalankan perintah "npm start", aplikasi akan terbuka pada browser dan dapat diakses pada alamat http://localhost:8080/.

Dengan menjalankan aplikasi menggunakan webpack dev server, kita dapat mengembangkan aplikasi secara lebih mudah dan cepat, karena webpack dev server akan melakukan rebuild dan reload secara otomatis setiap kali terdapat perubahan pada kode.

4. Tambahkan data dari server menggunakan Axios dan tampilkan pada custom element "post-list".

Untuk menambahkan data dari server menggunakan Axios dan menampilkannya pada custom element "post-list", kita dapat membuat file baru bernama "posts.js" pada direktori "src".

```js
import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};
```

Pada kode di atas, kita membuat fungsi "getPosts" yang akan mengambil data dari server menggunakan Axios. Fungsi ini akan mengembalikan data dalam bentuk array of objects.

Setelah membuat fungsi "getPosts", kita dapat menggunakannya pada custom element "post-list". Edit file "post-list.js" pada direktori "src/components" untuk menampilkan data pada elemen "ul".

```js
import { getPosts } from "../../posts";

class PostList extends HTMLElement {
  connectedCallback() {
    this.render();
    this.fetchData();
  }

  render() {
    this.innerHTML = `
      <h2>Daftar Posting</h2>
      <ul class="post-list"></ul>
    `;
  }

  async fetchData() {
    const posts = await getPosts();
    const postList = this.querySelector(".post-list");

    posts.forEach((post) => {
      const postItem = document.createElement("li");
      postItem.classList.add("post-item");
      postItem.innerHTML = `
        <h3 class="post-title">${post.title}</h3>
        <p class="post-body">${post.body}</p>
      `;
      postList.appendChild(postItem);
    });
  }
}

customElements.define("post-list", PostList);
```

Pada kode di atas, kita menambahkan method "fetchData" yang akan mengambil data dari server menggunakan fungsi "getPosts" dan menampilkan data pada elemen "ul" dengan class "post-list".

Setelah menambahkan kode di atas, jalankan aplikasi menggunakan perintah "npm start" pada terminal dan buka halaman web pada alamat http://localhost:8080/. Jika berhasil, maka daftar posting akan ditampilkan pada halaman web.

5. Gunakan Lodash untuk mengolah data dari server

Kita dapat menggunakan Lodash untuk mengolah data yang diambil dari server sebelum ditampilkan pada halaman web. Misalnya, kita ingin menampilkan hanya 5 posting terbaru dari data yang diambil dari server. Untuk melakukan ini, kita dapat menambahkan kode berikut pada file "posts.js".

```js
import axios from "axios";
import _ from "lodash";

export const getPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = response.data;
  const latestPosts = _.takeRight(posts, 5); // Mengambil 5 posting terbaru dari data
  return latestPosts;
};
```

Pada kode di atas, kita menggunakan fungsi "takeRight" dari Lodash untuk mengambil 5 posting terbaru dari data yang diambil dari server.

Setelah menambahkan kode di atas, jalankan aplikasi menggunakan perintah "npm start" pada terminal dan buka halaman web pada alamat http://localhost:8080/. Jika berhasil, maka hanya 5 posting terbaru yang akan ditampilkan pada halaman web.

6. Mengoptimalkan bundle dengan Webpack

Kita dapat mengoptimalkan bundle yang dihasilkan oleh Webpack dengan berbagai cara, seperti menghilangkan kode yang tidak terpakai, mengecilkan ukuran file dengan menggabungkan file, dan lain sebagainya.

Untuk mengoptimalkan bundle, kita dapat melakukan beberapa hal berikut:

- Menggunakan "production" mode pada Webpack dengan menambahkan parameter "--mode production" pada perintah "npm run build". Ini akan mengoptimalkan bundle dengan cara seperti menghilangkan kode yang tidak terpakai dan mengecilkan ukuran file.
- Menggunakan "terser-webpack-plugin" untuk mengecilkan ukuran file. Plugin ini akan menggabungkan dan mengecilkan ukuran file yang dihasilkan oleh Webpack.
- Menggunakan "splitChunks" untuk menggabungkan kode yang sering digunakan menjadi satu file agar tidak perlu di-load berulang-ulang oleh browser.

Untuk mengimplementasikan cara di atas, kita dapat mengubah file "webpack.config.js" sebagai berikut.

```js
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
```

Pada kode di atas, kita menambahkan beberapa konfigurasi pada bagian "optimization". Kita menggunakan "TerserPlugin" untuk mengecilkan ukuran file, dan menggunakan "splitChunks" untuk menggabungkan kode yang sering digunakan menjadi satu file.

Setelah mengubah file "webpack.config.js", jalankan perintah "npm run build"

Setelah melakukan perubahan pada file "webpack.config.js", langkah selanjutnya adalah melakukan build menggunakan perintah "npm run build". Ini akan menghasilkan file bundle yang siap digunakan pada aplikasi web kita.

Berikut adalah contoh kode dari "webpack.config.js" setelah melakukan konfigurasi loader dan plugin:

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
```

Setelah file "webpack.config.js" telah diubah, jalankan perintah "npm run build" pada terminal:

```
npm run build
```

Setelah proses build selesai, file bundle akan disimpan pada direktori "dist". Sekarang kita siap untuk menggunakan file bundle tersebut pada aplikasi web kita.

Langkah selanjutnya adalah memperbarui file "index.html" untuk menggunakan file bundle yang telah kita buat. Kita akan mengubah tag script pada file "index.html" untuk mengarahkan ke file bundle yang telah dibuat.

Berikut adalah contoh kode dari file "index.html" yang telah diperbarui:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Belajar Online</title>
    <link rel="stylesheet" href="./dist/style.css" />
  </head>
  <body>
    <h1>Belajar Online</h1>
    <div id="app"></div>
    <script src="./dist/bundle.js"></script>
  </body>
</html>
```

Perhatikan bahwa kami telah mengubah tag script untuk mengarahkan ke file bundle yang telah dibuat. Kami juga telah menambahkan tag link untuk mengarahkan ke file style.css.

Sekarang, jalankan kembali aplikasi web kita dengan perintah "npm start":

```
npm start
```

Aplikasi web akan dijalankan pada browser. Jika semuanya telah diatur dengan benar, aplikasi web akan terlihat sama seperti sebelumnya, namun dengan file bundle yang telah kita buat.

Selamat, Anda telah berhasil membuat aplikasi web belajar online dengan ES6, Custom Element, NPM, Module Bundler, dan AJAX! Anda juga telah berhasil menggunakan package pihak ke-3, menulis kode dengan bersih dan konsisten, serta melakukan eksplorasi pada penerapan webpack.


======================================================================================================================
Buatlah Submission: Membuat Aplikasi Web dengan ES6, Custom Element, NPM, Module Bundler, dan AJAX

Dengan kriteria 
1. Menerapkan tampilan aplikasi yang menarik:
- Memiliki pemilihan warna yang pas dengan tema aplikasi (dalam memilih warna, Anda dapat memanfaatkan tools pemilihan warna seperti colorhunt.co).
- Tata letak elemen yang pas.
Contoh: Tidak ada konten yang bertumpuk.
Penggunaan font yang pas dengan tema.
- Penerapan padding, margin yang pas.
Responsif pada seluruh ukuran layar perangkat.
2 . Menggunakan package pihak ke-3 yang di-install melalui package manager (bukan CDN), contohnya:
- Lodash
- Axios
- JQuery
dsb.
3. MenuliskanMenuliskan kode dengan bersih dan konsisten. Anda bisa memanfaatkan Linter seperti ESLint dalam menjaga gaya penulisan kode.
3. Bereksplorasi pada penerapan webpack. 
Contohnya seperti berikut. 
- Menggunakan Loader atau Plugin di luar yang diajarkan pada modul.
Menerapkan optimasi bundle seperti minifying atau split chunk.

Bantu saya dengan memberikan panduan pembuat submission tersebut dan sertakan code implementasi nya

Dan ini adalah jawaban anda sebelumnya :

Baik, berikut adalah panduan pembuatan Submission Membuat Aplikasi Web dengan ES6, Custom Element, NPM, Module Bundler, dan AJAX dengan kriteria yang telah disebutkan:

1. Menerapkan tampilan aplikasi yang menarik:

Untuk menerapkan tampilan aplikasi yang menarik, Anda dapat melakukan beberapa hal sebagai berikut:
- Gunakan warna-warna yang sesuai dengan tema aplikasi. Anda dapat memanfaatkan tools pemilihan warna seperti colorhunt.co untuk memilih kombinasi warna yang pas.
- Gunakan tata letak elemen yang pas. Pastikan tidak ada konten yang bertumpuk dan penggunaan font yang sesuai dengan tema.
- Terapkan padding dan margin yang pas pada elemen-elemen dalam aplikasi.
- Pastikan aplikasi responsif pada seluruh ukuran layar perangkat.

2. Menggunakan package pihak ke-3 yang di-install melalui package manager:

Anda dapat menggunakan package manager seperti NPM untuk menginstall package pihak ke-3 yang akan digunakan dalam aplikasi. Berikut adalah contoh penggunaan beberapa package pihak ke-3:
- Lodash: digunakan untuk memanipulasi data dan menyederhanakan kode JavaScript. Anda dapat menginstallnya dengan perintah `npm install lodash`.
- Axios: digunakan untuk mengirim request HTTP. Anda dapat menginstallnya dengan perintah `npm install axios`.
- JQuery: digunakan untuk manipulasi DOM dan efek-efek visual. Anda dapat menginstallnya dengan perintah `npm install jquery`.

3. Menuliskan kode dengan bersih dan konsisten:

Untuk menuliskan kode dengan bersih dan konsisten, Anda dapat memanfaatkan Linter seperti ESLint. ESLint akan membantu Anda dalam menjaga gaya penulisan kode dan menghindari kesalahan-kesalahan umum dalam penulisan kode. Berikut adalah langkah-langkah untuk menggunakan ESLint:
- Install ESLint dengan perintah `npm install eslint`.
- Buat file konfigurasi ESLint dengan perintah `eslint --init`.
- Konfigurasikan ESLint sesuai dengan preferensi Anda.
- Jalankan ESLint dengan perintah `eslint .` untuk memeriksa kode.

4. Bereksplorasi pada penerapan webpack:

Untuk bereksplorasi pada penerapan webpack, Anda dapat melakukan beberapa hal sebagai berikut:
- Menggunakan Loader atau Plugin di luar yang diajarkan pada modul. Contohnya, Anda dapat menggunakan Loader seperti `babel-loader` untuk mengkompilasi kode ES6 ke ES5. Anda dapat menginstall `babel-loader` dengan perintah `npm install babel-loader`.
- Menerapkan optimasi bundle seperti minifying atau split chunk. Untuk menerapkan optimasi ini, Anda dapat menggunakan Plugin seperti `UglifyJsPlugin` untuk melakukan minifikasi kode. Anda dapat menginstall `uglifyjs-webpack-plugin` dengan perintah `npm install uglifyjs-webpack-plugin`.

Berikut adalah contoh implementasi aplikasi web dengan ES6, Custom Element, NPM, Module Bundler, dan AJAX yang memenuhi kriteria di atas:

index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <my-app></my-app>
    <script src="bundle.js"></script>
</body>
</html>
```

style.css
```
body {
    background-color: #f2f2f2;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.my-app {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    margin: 20px auto;
    max-width: 800px;
    padding: 20px;
}

.btn {
    background-color: #007bff;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
}

.btn:hover {
    background-color: #0062cc;
}
```

my-app.js
```
import { getPosts } from './api.js';

class MyApp extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });

        this.render();
    }

    async render() {
        const posts = await getPosts();

        const postList = document.createElement('ul');

        posts.forEach(post => {
            const postItem = document.createElement('li');
            postItem.innerHTML = post.title;
            postList.appendChild(postItem);
        });

        const button = document.createElement('button');
        button.setAttribute('class', 'btn');
        button.innerHTML = 'Load More';

        this.shadow.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
                :host {
                    display: block;
                }
                h1 {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 32px;
                    margin-bottom: 20px;
                }
            </style>
            <div class="my-app">
                <h1>My App</h1>
                ${postList.outerHTML}
                ${button.outerHTML}
            </div>
        `;
    }
}

customElements.define('my-app', MyApp);
```

api.js
```
import axios from 'axios';

export async function getPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
    return response.data;
}
```

webpack.config.js
```
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/my-app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
```


Berikut adalah contoh implementasi aplikasi web dengan ES6, Custom Element, NPM, Module Bundler, dan AJAX yang memenuhi kriteria yang disebutkan:

index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <my-app></my-app>
    <script src="bundle.js"></script>
</body>
</html>
```

style.css
```
body {
    background-color: #f2f2f2;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.my-app {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    margin: 20px auto;
    max-width: 800px;
}

h1 {
    font-size: 36px;
    margin-top: 0;
    margin-bottom: 20px;
}

button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 0;
    cursor: pointer;
    border-radius: 5px;
}

input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit] {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 0;
    cursor: pointer;
    border-radius: 5px;
}

.alert {
    padding: 20px;
    background-color: #f44336;
    color: white;
    border-radius: 5px;
    margin-bottom: 20px;
}

.success {
    background-color: #4CAF50;
}
```

Berikut adalah kode lengkap dari `my-app.js` yang telah dituliskan ulang dengan sedikit perubahan:

```
import { getPosts, createPost } from './api.js';

class MyApp extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>My App</h1>
            <form id="my-form">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" required>
                <label for="body">Body</label>
                <textarea id="body" name="body" required></textarea>
                <input type="submit" value="Submit">
            </form>
            <div id="posts"></div>
        `;
        this.form = this.querySelector('#my-form');
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.postsContainer = this.querySelector('#posts');
        this.fetchPosts();
    }

    async fetchPosts() {
        const posts = await getPosts();
        this.renderPosts(posts);
    }

    renderPosts(posts) {
        this.postsContainer.innerHTML = '';
        posts.forEach(post => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            this.postsContainer.appendChild(div);
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const title = this.form.title.value;
        const body = this.form.body.value;
        if (title.trim() === '' || body.trim() === '') {
            this.showAlert('Please fill in all fields', 'alert');
            return;
        }
        const post = await createPost({ title, body });
        this.form.reset();
        this.showAlert('Post created', 'success');
        this.fetchPosts();
    }

    showAlert(message, className) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert ${className}`;
        alertDiv.appendChild(document.createTextNode(message));
        const container = document.querySelector('.my-app');
        const form = document.querySelector('#my-form');
        container.insertBefore(alertDiv, form);
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
}

customElements.define('my-app', MyApp);
```

Beberapa perubahan yang dilakukan pada kode asli adalah sebagai berikut:

1. Menambahkan `${post.title}` dan `${post.body}` pada bagian `renderPosts()` untuk menampilkan judul dan isi setiap post.
2. Mengubah `handleSubmit()` agar dapat menangani input kosong dan menampilkan pesan kesalahan menggunakan `showAlert()`.
3. Menambahkan `showAlert()` untuk menampilkan pesan kesalahan atau berhasil setelah submit form.
4. Menambahkan `customElements.define()` untuk meregistrasikan `MyApp` sebagai custom element dengan nama `my-app`.

app.js
```
import axios from 'axios';
import './my-app.js';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

class MyApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <h1>Todo List</h1>
      <ul></ul>
    `;
  }

  connectedCallback() {
    axios.get(API_URL)
      .then(response => {
        const todos = response.data;
        const ul = this.shadowRoot.querySelector('ul');
        todos.forEach(todo => {
          const li = document.createElement('li');
          li.textContent = todo.title;
          ul.appendChild(li);
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
}

customElements.define('my-app', MyApp);
```

webpack.config.js
```
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin(),
  ],
};
```

Untuk menjalankan aplikasi ini, Anda perlu menjalankan beberapa perintah pada terminal:

1. Install package yang diperlukan dengan perintah `npm install`.
2. Compile dan bundle kode dengan perintah `npx webpack`.
3. Buka file index.html di browser.

Dengan demikian, Anda telah berhasil membuat aplikasi web dengan ES6, Custom Element, NPM, Module Bundler, dan AJAX yang memenuhi kriteria yang telah disebutkan.
