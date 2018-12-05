package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.Car;
@Repository
public interface InventoryRepository extends JpaRepository<Car, String> {

}
