package repository;




import org.springframework.data.jpa.repository.JpaRepository;

import entity.Car;

public interface DisplayRepository extends JpaRepository<Car, Integer> {



	
	
}
