# DB ERD modeling
<div align=center>  
<img src="IMAGE/covid.jpg" width="600">
</div> 
<br>

# 엔티티 관계도
<div align=center>  
<img src="IMAGE/엔티티관계도.jpg" width="500">
</div> 
<br>

# MySQL 프로그래밍
## 쿼리

- 확진날짜를 월별로 몇명이 확진되었는지 카운트해서 조회하기.
    ```sql
    SELECT
        date_format(confirmeddate, "%m") AS "월별",
        count(*)
    FROM coronic
    GROUP BY date_format(confirmeddate, "%m")
    ORDER BY date_format(confirmeddate, "%m")
    ```
    <div align=center>  
    <img src="IMAGE/월별조회.jpg" width="300">
    </div> 
    <br>


- 대전에 거주하고 모더나를 맞은 여자의 이름,지역,성별,백신코드를 조회하기.
    ```sql
    SELECT 
	    a.name AS "이름",
	    a.area AS "지역",
	    a.gender AS "성별",
	    b.vaccinecode AS "백신코드"
    FROM coronic AS a
    INNER JOIN covid19_info AS b 
    ON a.registration = b.registration
    WHERE a.area = "대전" and a.gender = "여" AND vaccinecode = "035F21A"
    ```
    <div align=center>  
    <img src="IMAGE/대전모더나여자.jpg" width="500">
    </div> 
    <br>
- 충남에 살고 모더나를 맞은 천안우리병원에 입원환자 찾기.
    ```sql
    SELECT 
	    a.name AS "이름",
	    a.registration AS "주민등록번호",
	    a.area AS "지역",
	    b.vaccinecode AS "백신코드",
	    v.vaccine_manufacturer AS "백신제조사",
	    h.hospitalname AS "병원명",
	    c.hospitalcode AS "병원코드"
    FROM coronic AS a
    INNER JOIN covid19_info AS b 
    ON a.registration = b.registration 
    INNER JOIN patient AS c
    ON b.coronicno = c.coronicno 
    inner JOIN vaccine AS v 
    ON b.vaccinecode = v.vaccinecode
    INNER JOIN hospital AS h 
    ON c.hospitalcode = h.hospitalcode 
    WHERE a.area = "충남" AND b.vaccinecode = "035F21A" AND c.  hospitalcode = "330011"
    ```
    <div align=center>  
    <img src="IMAGE/입원환자.jpg" width="500" height="100">
    </div> 
    <br>
- A가 들어간 백신을 맞고난 후 2022년도에 확진된 사람의 정보를 모두 셀렉트하시오  
    ```sql
    SELECT 
	    *
    FROM covid19_info AS c INNER JOIN patient AS p 
    ON c.coronicno  = p.coronicno  where c.vaccinecode like "%A%"
    AND date_format(p.hospital_in ,"%Y")  = 2022
    ```
    <div align=center>  
    <img src="IMAGE/A.jpg">
    </div> 
    <br>
    
- 22년 3월 입원한 환자중 최근여행이력이 있는 환자 조회(이병헌찾기😎)
    ```sql
    SELECT 
	    a.name AS "이름",
	    a.is_overseastrip AS "최근여행여부",
	    p.hospital_in AS "입원날짜"	
    FROM coronic as a inner JOIN covid19_info as b 
    on a.registration = b.registration
    inner join patient as p 
    ON b.coronicno = p.coronicno
    WHERE a.is_overseastrip = 1 AND date_format(confirmeddate,"%m") = 03 
    ```
    <div align=center>  
    <img src="IMAGE/여행이력.jpg" width="500">
    </div> 
    <br>