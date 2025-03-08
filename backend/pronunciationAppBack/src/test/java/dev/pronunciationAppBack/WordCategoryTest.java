package dev.pronunciationAppBack;

import dev.pronunciationAppBack.model.Category;
import dev.pronunciationAppBack.model.Word;
import dev.pronunciationAppBack.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class WordCategoryTest {

    @Autowired
    private WordRepository wordRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public void assignCategory() {
        // Create some categories
        Category animal = new Category("Animal");
        Category furniture = new Category("Furniture");

        // Save categories
        categoryRepository.save(animal);
        categoryRepository.save(furniture);

        // Create a word and assign it to a category.
        Word dog = new Word("Dog");
        dog.assignCategory(animal);

        Word chair = new Word("Chair");
        chair.assignCategory(furniture);

        // Save the word in the database
        categoryRepository.save(dog);
        categoryRepository.save(chair);

        // Remove the category from the word
        dog.removeCategory(animal);
        chair.removeCategory(furniture);

        // Now if we save the word, it will be without a category.
        categoryRepository.save(dog);
        categoryRepository.save(chair);


    }

}
