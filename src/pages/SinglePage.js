import React, {  useState, useEffect } from 'react';
import SingleAside from '../template/SingleAside';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import SinglePTab from '../template/SinglePTab';
import { ImagesGallery } from '../services/Datas';


const SinglePage = ({ Loading, setLoading }) => {
  let [BImg, setBImg] = useState(ImagesGallery[0].img);
  let [Images, setImages] = useState([]);

  // change image on click
  let ImgFunc = (e) => {
    let temp = e.target;
    let container = e.currentTarget;
    if (temp.tagName === 'IMG') {
      for (let i of container.children) {
        if (i.classList.contains('g-active')) {
          i.classList.remove('g-active');
        }
      }

      setBImg(temp.src);
      temp.classList.add('g-active');
    }
  };

  useEffect(() => {
    setImages(ImagesGallery);
  }, []);

  // set main image active in gallery
  useEffect(() => {
    if (Images.length) {
      let Gallery = document.getElementById('image_gallery');
      Gallery.children[0].classList.add('g-active');
      console.log(Gallery.children);
    }
  }, [Images]);

  // formik
  let formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      comment: '',
      vila_id: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'باید 15 حرف یا کمتر باشد')
        .required('این قسمت نمیتواند خالی باشد'),
      phone: Yup.string()
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          'شماره معتبر نمی باشد'
        )
        .required('این قسمت نمیتواند خالی باشد'),
      comment: Yup.string().required('این قسمت نمیتواند خالی باشد')
    }),
    onSubmit: () => {
      let data = formik.values;

      // axios
      //   .post(`${BASE_URL}/comment/store`, data)
      //   .then((res) => {
      //     console.log(res);
      //     alert('پس از بررسی، کامنت ثبت میگردد');
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     alert('کامنت ثبت نشد');
      //   });
    }
  });

  return (
    <>
      <>
        <section className="text-white flex flex-col-reverse Break2:flex-row gap-5 max-w-6xl mx-auto px-4 mt-4 mb-10 ">
          <SingleAside />
          <section className="w-full ">
            {/* gallery */}
            <div className="flex flex-col gap-3 ">
              <div>
                <figure className="relative pt-[80%] md:pt-[50%]">
                  <img
                    className="w-full h-full absolute inset-0 rounded-md "
                    src={BImg}
                    alt=""
                  />
                </figure>
              </div>
              <div
                id="image_gallery"
                onClick={ImgFunc}
                className="grid grid-cols-4 md:flex md:flex-wrap gap-4 justify-center items-center"
              >
                {Images &&
                  Images.slice(0, 5).map((item, index) => (
                    <img
                      key={index}
                      className="w-full min-h-full max-h-20 md:max-w-[120px] rounded-md cursor-pointer opacity-60"
                      src={item.img}
                      alt="img gallery"
                    />
                  ))}
              </div>
            </div>
            <p className="bg-Gold text-xs md:text-base text-black font-kalamehMed px-4 py-2 text-center rounded-md mt-6">
              توصیه می کنیم پیش از بازدید، برای دریافت قیمت دقیق و اطلاعات
              بیشتر، با کارشناس این ویلا تماس بگیرید.
            </p>

            <p className="mb-2 mt-4 border-b border-Gold w-fit pb-1 font-bold">
              لورم ایپسوم
            </p>

            <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400 mt-5 mb-7">
              <tbody className="">
                <tr className="border-b border-gray-500 flex ">
                  <th className="py-2 px-6 flex-1  font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    سن بنا
                  </th>
                  <td className="py-2 px-6 flex-1 w-full text-slate-300 bg-slate-700">
                    10 سال
                  </td>
                </tr>
                <tr className="border-b border-gray-500 flex ">
                  <th className="py-2 px-6 flex-1  font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    متراژ زمین
                  </th>
                  <td className="py-2 px-6 flex-1 w-full text-slate-300 bg-slate-700">
                    230
                  </td>
                </tr>
                <tr className="border-b border-gray-500 flex ">
                  <th className="py-2 px-6 flex-1  font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    متراژ بنا
                  </th>
                  <td className="py-2 px-6 flex-1 w-full text-slate-300 bg-slate-700">
                    210
                  </td>
                </tr>
                <tr className="border-b border-gray-500 flex ">
                  <th className="py-2 px-6 flex-1  font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    تعداد اتاق
                  </th>
                  <td className="py-2 px-6 flex-1 w-full text-slate-300 bg-slate-700">
                    5
                  </td>
                </tr>

                <tr className="border-b border-gray-500 flex ">
                  <th className="py-2 px-6 flex-1  font-medium text-Gold whitespace-nowrap bg-gray-50  dark:bg-gray-800">
                    شرایط فروش
                  </th>
                  <td className="py-2 px-6 flex-1 w-full text-slate-300 bg-slate-700">
                    لورم
                  </td>
                </tr>
              </tbody>
            </table>

            <SinglePTab  />

            <form onSubmit={formik.handleSubmit} className="w-full my-4 mt-8">
              <div className="block mb-2">
                <div className="text-white font-bold text-lg mb-2">ثبت نظر</div>
                <div className="flex flex-wrap gap-1 md:gap-3 mb-2">
                  <input
                    className="CommentInput"
                    type="text"
                    placeholder="نام خود را وارد کنید *"
                    id="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  <input
                    className="CommentInput"
                    type="text"
                    id="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    placeholder="شماره خود را وارد کنید *"
                  />
                </div>
                <textarea
                  className="block w-full mt-1 rounded bg-slate-500 outline-none focus:border-Gold p-4 border border-transparent placeholder:font-bold placeholder:text-sm"
                  placeholder="نظر خود را بنویسید *"
                  rows="3"
                  id="comment"
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-3 py-2 text-blue-100 bg-blue-600 hover:bg-blue-700 transition-all rounded mt-2 w-full font-bold "
              >
                ارسال پیام
              </button>
            </form>
          </section>
        </section>
      </>
    </>
  );
};

export default SinglePage;
