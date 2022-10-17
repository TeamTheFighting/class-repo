-- ===========================================22.10.12
-- ### 10월 12일 SQL 문제 🎅
-- #### *10월 13일 14:30분전 까지 업로드 할 것! 👮‍♂️

1. 사원이름, 사원직책, 사원급여 조회.
```sql
	SELECT 
		ename, job, sal
	FROM emp 
	
```
2. 사수번호가 7839인 사원 번호, 이름, 입사날짜 조회.
```sql
	SELECT 
		empno, ename, hiredate,
	FROM emp
	WHERE mgr = 7839
	
```
3. 급여가 3000 이하인 사원의 모든 정보 조회.
```sql
	SELECT 
		*
	FROM emp
	WHERE sal <= 3000

```
4. 사원이름, 부서번호, 부서이름, 부서 근무지 조회.
```sql
	SELECT 
		e. ename, d. deptno, d. dname, d. loc
	FROM emp AS e INNER JOIN dept AS d
	ON d. deptno = e. deptno
	
```
 -- ???? 5. 부서별 급여합계, 부서이름 조회. 
```sql
	SELECT 
		e.sum(sal), d.dname
	FROM emp as e INNER JOIN dept as d
	ON e.deptno = d. deptno
	
```
	

 -- ???? 6. 부서 근무지가 NEW YORK이고, 직책이 MANAGER인 사원의 이름, 급여 조회. 
```sql
	SELECT e.ename, e.sal
	FROM emp AS e INNER JOIN dept AS d
	ON e.deptno = d.deptno
	WHERE d.loc = 'newyork', e.job ='manager'
	
```
7. 1983년 이후 입사한 사원의 보너스가 null이면 100 주고, 사원의 이름, 부서이름, 직업 조회.
```sql
	SELECT ifnull(comm, 100) ename, deptno, job, hiredate
	FROM emp
	WHERE hiredate >= 1983
	
```
8.  부서명이 RESEARCH인 사원의 이름, 급여, 근무 지역 조회.
```sql
	SELECT e.ename, e.sal, d.loc
	FROM emp AS e INNER JOIN dept AS d
	ON e.deptno = d.deptno
	WHERE d.dname = 'RESEARCH'
	
```
9. 보너스를 받은 사원 이름, 직책, 급여, 부서명 조회.
```sql
	SELECT ename, job, sal, deptno, comm
	FROM emp
	WHERE comm IS NOT null

```
10. 이름 첫글 A자를 가진 사원 이름, 직책, 부서명, 부서 위치 조회.
```sql
	SELECT e.ename, e.job, e.deptno, d.loc
	FROM emp AS e INNER JOIN dept AS d
	WHERE e. ename LIKE 'A%%'
```
11. 사원명, 사수번호, 사수 이름 조회. 단, 사수가 없는 사원도 포함
```sql
	SELECT e.ename, e.mgr, e2.ename 
	FROM emp AS e INNER JOIN emp AS e2
	ON e.mgr = e2.empno
	-- ?? 이게 왜 뜨는진 모르겠다
	
```
12. 사원명, 사수번호, 사수 이름 조회. 단, 사수가 없는 사원만
```sql
	SELECT ename, mgr, mgr ename
	FROM emp
	WHERE mgr IS null

```
13. 상사번호가 7698인 사원의 이름, 사원번호, 상사번호, 상사이름 조회.
```sql
	SELECT e.ename, e.empno, e.mgr, d.ename
	FROM emp AS e INNER JOIN dept AS d
	WHERE mgr = 7698

```
14. 상사보다 먼저 입사한 사원의 사원이름, 사원의 입사일, 상사 이름, 상사 입사일 조회.
```sql

	SELECT e.ename, e.hiredate, e2.ename, e2.hiredate
	FROM emp AS e INNER JOIN emp AS e2
	ON e.empno = e2.empno
	WHERE e.hiredate < e2.hiredate
	
```
15. 업무가 MANAGER이거나 CLERK고 입사날짜가 1982년에 입사한
 사원의 사원번호, 이름, 급여, 직업, 부서명 조회.
```sql
 	SELECT empno, ename, job, deptno
 	FROM emp
 	WHERE (job = 'manager'OR ename= 'clerk') and hiredate = 1982	

```
16. 부서별 급여 총합 조회. 
    단, 사원이 존재하지 않는 부서도 포함해서 급여 순으로 내림차순 하시오.
```sql
	SELECT sum(sal) desc
	FROM emp AS e right JOIN dept AS d
	
```
17.  사원 이름, 상사 이름, 사원 부서번호, 사원 부서명, 사원 근무지역 조회. 
    단, 사원이 존재하지 않는 부서번호와 부서명도 조회.
    -- ?? 사원의 부서명..?
```sql
    SELECT e.ename, e2.ename, e.deptno, d.dname, e.loc
    FROM emp AS e INNER JOIN dept AS d
   
``` 

18. 부서 위치가 CHICAGO이고 사수 급여가 5000 미만인 
 사원 번호,사원 이름,사수 번호, 사수 이름, 사수 급여, 부서명 조회.
 단, 사원의 입사날짜로 오름차순.
```sql
	 SELECT e.empno, e.ename, e.mgr, e2.ename, e2.sal, d.dname
	 FROM emp AS e INNER JOIN emp AS e2 AND dept AS d
	 where loc ='CHICAGO' OR sal < 5000
	 ORDER BY hiredate asc
```
19. 입사날짜를 월별로 몇명이 입사했는지 카운트해서 조회.
	SELECT count(ename)
	FROM emp
	GROUP BY hiredate('%m')
-- ??
	SELECT count(ename) AND date_format(hiredate,'%m')
	FROM emp
-- ??
	
```
20. 부서번호, 부서이름, 부서 근무지, 사원 수 조회 단, 사원이 없는 부서도 조회할 수 있게 
```sql
	SELECT d.deptno, d.dname, d.loc, e.count(ename)
	FROM emp AS e right JOIN dept AS d
	
```
21. 9월에 입사한 사원의 이름, 번호, 입사날짜 조회.
```sql
	SELECT ename, empno, hiredate
	FROM emp
	WHERE hiredate(september OR 09)

```
22. 직업이 SALESMAN 이고 입사날짜가 1981-02-22 이후에 들어온 사원들의 급여 총합, 급여평균 조회.
```sql
	SELECT sum(sal), avg(sal)
	FROM emp
	WHERE job = 'salesman' OR hiredate => 1981-02-22

```
23. 사원번호 8080, 사원이름 홍길동, 직업 MANAGER, 입사날짜를 오늘날짜로 사원 추가하시오.
```sql
	INSERT INTO emp (ename, job, hiredate)
	VALUES ('홍길동', 'manager', now())

```
24. 사원번호 8080인 사원 사수번호를 7839로 급여를 500으로 수정하시오.
```sql
	UPDATE emp
	SET mgr = 7839 ,sal = 500
	WHERE empno = 8080 

```
25. 사원번호 8080인 사원을 삭제하시오.
```sql
	DELETE FROM emp
	WHERE empno = 8080

```
26. 사원수가 4명 이상인 부서의 번호, 사원 수, 부서 이름, 부서 위치 조회.
```sql
	SELECT d.deptno, e.count(empno), d.dname, d.loc
	FROM emp AS e INNER JOIN dept AS d
	WHERE count(ename) => 4
```
