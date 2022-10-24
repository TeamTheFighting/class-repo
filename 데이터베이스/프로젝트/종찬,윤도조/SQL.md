# DB ERD Modeling
## DBeaver table entity
<img src="DB모델링(최종).png">
<hr>

## ERwin table entity
<img src="DB모델링1(최종).png">
<hr>
<br>

# SQL 쿼리

### 관원 별 소속도장
```sql
select b.name, m.ssno, g.gym_no, g.gym_name
from martial_gym as g
inner join gym_member as m 
on g.gym_no = m.gym_no
inner join martial_artist as b
on m.ssno = b.ssno
order by g.gym_no
```
### 종목 별 단 조회
```sql
select m.name, m.birthday, m.address, m.phone_number, m.sex, d.martial_no, a.martial_name, d.dan
from martial_artist as m
inner join martial_dan as d
on m.ssno = d.ssno 
inner join martial_arts as a
on d.martial_no = a.martial_no
where m.ssno = '주민번호'
```
### 총합 단수 조회 쿼리
```sql
SELECT 
mat.name, sum(md.dan) 
FROM martial_artist AS mat 
INNER JOIN martial_dan AS md 
ON mat.ssno = md.ssno 
WHERE mat.ssno = '주민번호'
GROUP BY mat.ssno 
ORDER BY sum(md.dan) DESC
```
### 소속 도장별 인원수
```sql
SELECT b.gym_no, b.gym_name, count(*) AS "관원 수"
FROM gym_member AS a
INNER JOIN martial_gym AS b
ON a.gym_no = b.gym_no GROUP BY b.gym_no
```
### 종목별 유단자 수
```sql
SELECT b.martial_no, b.martial_name, count(*) AS "종목별 인원수"
FROM martial_dan AS a
INNER JOIN martial_arts AS b
ON a.martial_no = b.martial_no GROUP BY b.martial_no
```
### 남여 비율
```sql
SELECT sex AS "성별",
(count(sex) / (SELECT count(*) FROM martial_artist)*100) AS "남녀비율"
FROM martial_artist
GROUP BY sex
```
### 종합 단 인원 수 및 비율
```sql
SELECT
	td.totalDan AS "종합 단",
	count(td.totalDan) AS "단을 가진 사람",
	(count(td.totalDan) / td.total*100) AS "종합 단 별 비율"
FROM (
	SELECT 
		mat.ssno AS "jumin",
		sum(md.dan) AS "totalDan",
		(SELECT count(*) FROM martial_artist) AS "total"
	FROM martial_artist AS mat 
	INNER JOIN martial_dan AS md 
	ON mat.ssno = md.ssno 
	GROUP BY mat.ssno
) AS td
INNER JOIN martial_artist AS md 
ON td.jumin = md.ssno 
GROUP BY td.totalDan
ORDER BY td.totalDan DESC
```
### 무술 별 비율
```sql
SELECT
	c.martial_name AS "무술이름",
	count(*) AS "종목별 인원수",
	(count(*) / (SELECT count(*) FROM martial_artist) * 100) AS "종목별 비율"
FROM gym_member AS a
INNER JOIN martial_gym AS b
ON a.gym_no = b.gym_no
INNER JOIN martial_arts AS c
ON b.martial_no = c.martial_no 
GROUP BY b.martial_no
ORDER BY count(*) desc
```