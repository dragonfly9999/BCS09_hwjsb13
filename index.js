// BÀI TẬP 1: Chương trình tính lương cho nhân viên
const tienLuong = 100000;
document.querySelector('.tinhLuong').onclick = function(){
    // input: số tiền lương 1 ngày bằng 100.000VNĐ 
    // cho người dùng nhập số ngày
    var soNgayLam = document.getElementById('soNgay').value * 1;
    // output :là number, sau khi người dùng bấm vào button cần cho người dùng thấy được số lương
    var soLuong = 0;
    // progress: muốn tính số lương cho nhân viên cần lấy value của soNgayLam * tienLuong
    soLuong = soNgayLam * tienLuong;
    console.log(soLuong)
     // hiện thị cho người dùng thấy:
    document.querySelector('.soLuong').innerHTML = `Tiền lương của bạn là: ${soLuong.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND'
    })}` 
}
// BÀI TẬP 2 : Tính giá trị trung bình của 5 số thực
 document.querySelector('.soTrungBinh').onclick = function(){
    // input : Cho người dùng nhập 5 số thực bất kì vào ô input
    var soThuNhat = document.getElementById('so1').value * 1;
    var soThuHai = document.getElementById('so2').value * 1;
    var soThuBa = document.getElementById('so3').value * 1;
    var soThuTu = document.getElementById('so4').value * 1;
    var soThuNam = document.getElementById('so5').value * 1;
    // output:là number, giá trị trung bình của 5 số thực 
    var giaTriTrungBinh = 0;
    // progress: tính giá trị trung bình các số thực bằng cách lấy tổng giá trị của 5 số thực / 5(tổng 5 giá trị / 5)
    var tongGiaTri = soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam;
    giaTriTrungBinh = tongGiaTri / 5;
    console.log('giá trị', giaTriTrungBinh)
    // hiện thị cho người dùng thấy:
    document.querySelector('.trungBinh').innerHTML = `Giá trị trung bình là: ${giaTriTrungBinh}`;
}
// BÀI TẬP 3: CHUYỂN ĐỔI TIỀN USA SANG TIỀN VNĐ 
document.querySelector('.doiTien').onclick = function(){
    // input: cho người dùng nhập số tiền USA cần chuyển đổi
    // tỉ giá USA nhận được theo dữ liệu là 23.500VNĐ
    var tienUSA = document.getElementById('tienDo').value * 1;
    // output:là number, sau khi người dùng nhập xong số tiền USA sẽ hiển thị số tiền VNĐ đã được quy đổi 
    var tienVND = 0;
    // progress: muốn quy đổi USA sang VNĐ thì cần lấy giá trị số tiền USA * tỉ giá tiền hiện tại ( tienUSA * 23500)
    tienVND = tienUSA * 23500;
    // console.log('tienVND', tienVND)
    // hiện thị giá trị tiền VNĐ ra cho người dùng thấy
    document.getElementById('tienViet').innerHTML = tienVND.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND'
    })
    document.querySelector('.fakeBor .fakeNum').className = 'chuDen'
}
// BẢI TẬP 4: TÍNH CHU VI VÀ DIỆN TÍCH HÌNH CHỮ NHẬT:
//tính chu vi:
document.querySelector('.tinhChuVi').onclick = function(){
    // input: nhận giá trị của chiều dài và chiều rộng của một hình chữ nhật bằng cách cho người dùng nhập giá trị và yêu cầu tính chu vi
    var chieuRongHcn = document.getElementById('chieuRong').value *1;
    var chieuDaiHcn = document.getElementById('chieuDai').value *1;

    // output:là number, cho người dùng kết quả chu vi của hcn:
    var chuViHcn = 0;

    // progress : Để tính chu vi của 1 hcn cần lấy (dài + rộng)*2:
    chuViHcn = (chieuRongHcn + chieuDaiHcn) * 2;
    // console.log('chu vi hcn', chuViHcn)
    // hiển thị cho người dùng thấy :
    document.querySelector('.phanHienThi .chuViHcn').innerHTML = `Chu vi HCN là: ${chuViHcn}`

    
}
document.querySelector('.tinhDienTich').onclick = function(){
    // input: nhận giá trị của chiều dài và chiều rộng của một hình chữ nhật bằng cách cho người dùng nhập giá trị và yêu cầu tính diện tích
    var chieuRongHcn = document.getElementById('chieuRong').value *1;
    var chieuDaiHcn = document.getElementById('chieuDai').value *1;

    // output:là number, cho người dùng kết quả diện tích của hcn:
    var dienTichHcn = 0;

    // progress : Để tính diện tích  của 1 hcn cần lấy chiều dài * chiều rộng:
    dienTichHcn = chieuRongHcn * chieuDaiHcn;

    // console.log('diện tích' , dienTichHcn)
    
    // hiển thị cho người dùng thấy :
    document.querySelector('.phanHienThi .dienTichHcn').innerHTML = `Diện tích HCN là: ${dienTichHcn}`

    
}

//BÀI TẬP 5: TÍNH TỔNG HAI KÝ SỐ CỦA MỘT SỐ CÓ 2 CHỮ SỐ
document.querySelector('.tinhTong').onclick = function(){
    // input: cho người dùng nhập một giá trị là number có 2 chữ số, yêu cầu tính tổng của 2 ký số đã nhập
    var chuSo = document.getElementById('haiChuSo').value * 1;

    if(chuSo < 10 || chuSo > 99){
        alert('chỉ có thể nhập vào số có hai chữ số')
    }

    //output: là number, cần ra được tổng giá trị của 2 ký số
    var tongKySo = 0;

    // progress: 
    // muốn lấy giá trị hàng chục thì lấy số người dùng đã nhập chia cho 10 ( chuSo / 10)
    // muốn lấy giá trị hàng đơn vị thì chỉ cần lấy số người dùng đã nhập chia lấy dư cho 10 (chuSo % 10)
    // ==> muốn tính tổng của 2 ký số cần lấy được số hàng chục và hơn đơn vị sau đó cộng 2 giá trị lại với nhau sẽ giá được tổng giá trị 2 ký số

    // lấy giá trị số hàng đơn vị và hàng chục:
    var hangChuc = Math.floor(chuSo / 10);
    var hangDonVi = Math.floor(chuSo % 10);

    //Tính tổng giá trị của 2 ký số:

    tongKySo = hangChuc + hangDonVi;

    // console.log('tổng ký số', tongKySo)

    // hiển thị cho người dùng thấy:
    document.getElementById('tongHaiSo').innerHTML = tongKySo;
    document.querySelector('.fakeLongNum').className = 'chuDen'




}
