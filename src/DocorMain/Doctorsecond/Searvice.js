import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

function Searvice() {
  return (
    <div style={{ paddingTop: "90px", height: "100vh" }}>
      <div className='bod'>
        <footer className='page-footer font-small blue pt-5 pb-2'>
          <div className='con container-fluid text-center text-md-left pt-5 pb-5'>
            <h1>Searvice</h1>

            <span>Searvice</span>
            <NavLink className='NavLink' to='/home'>
              {` >   الرئيسيه`}
            </NavLink>
          </div>
        </footer>
      </div>
      <ListGroup dir='rtl' style={{ width: "80%", margin: "50px auto" }}>
        <ListGroup.Item className='link'>
          <span> 1 - </span> يهدف موقع Searvice الى المساعدة للوصول الى بيانات
          الطبيب المناسب للحجز في عيادته
        </ListGroup.Item>
        <ListGroup.Item className='link'>
          <span> 2 - </span> نقوم بعرض بيانات العيادات العامة لتسهيل وصول المرضي
          للعيادات وحجز المواعيد، في
        </ListGroup.Item>
        <ListGroup.Item className='link'>
          <span> 3 - </span> حالة الرغبة في حذف عيادتك برجاء التواصل معنا علي
          contact@Searvice.com
        </ListGroup.Item>
        <ListGroup.Item className='link'>
          <span> 4 - </span> يمكن طلب بيانات المستخدمين فقط من خلال الجهات
          الحكومية في حالة الضرورة فقط
        </ListGroup.Item>
        <ListGroup.Item className='link'>
          <span> 5 - </span> نقوم بعرض بيانات الأطباء الخاصة بالعيادات ولا نقوم
          بنشر بيانات الأطباء الشخصية
        </ListGroup.Item>
        <ListGroup.Item className='link'>
          <span> 6 - </span>
          من المحتمل استخدام بيانات تحديد المكان للمستخدمين من أجل توفير خدمة
          أفضل وإظهار العيادات القريبة
        </ListGroup.Item>
        <ListGroup.Item className='link'>
          <span> 7 - </span>
          في حالة طلب الطبيب حذف بياناته من منصة اكشف بعد الادراج نقوم باخفاء
          جميع البيانات الخاصة بالطبيب والبيانات الخاصة بالحجز لمنع اي حجوزات
          مستقبلية مع منع عرض بيانات التواصل
        </ListGroup.Item>
        <ListGroup.Item className='link'>
          <span> 8 - </span>
          لايمكن طلب الطبيب حذف صفحته بالكامل من منصة اكشف حيث ان هذا الاجراء
          يسبب ضرر بالمنصة مع ضمان عدم حدوث اي حجز او اتصال من المنصة
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Searvice;
