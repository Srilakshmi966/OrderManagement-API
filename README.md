

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    category VARCHAR(100),
    discount DECIMAL(10,2) DEFAULT 0.00,
    image_url VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


INSERT INTO products (name, description, price, stock_quantity, category, discount, image_url, created_at, updated_at) VALUES
('Multigrain Sugar-Free Bread', 'Freshly baked bread with no added sugar, suitable for diabetics.', 10.00, 50, 'Bakery', 10.00, 'https://example.com/bread.jpg', NOW(), NOW()),

('Diabetic Protein Powder', 'Specialized protein powder for diabetics with low sugar content.', 19.99, 80, 'Health Supplements', 12.00, 'https://example.com/protein.jpg', NOW(), NOW()),

('Low-Carb Pasta', 'Diabetes-friendly pasta with high fiber and low carbohydrates.', 8.99, 110, 'Groceries', 9.00, 'https://example.com/pasta.jpg', NOW(), NOW()),

('Sugar-Free Peanut Butter', 'Creamy and healthy peanut butter without added sugar.', 5.49, 140, 'Spreads', 6.00, 'https://example.com/peanut-butter.jpg', NOW(), NOW()),

('Cinnamon Herbal Tea', 'Supports blood sugar control with natural cinnamon and herbs.', 4.99, 150, 'Beverages', 5.00, 'https://example.com/herbal-tea.jpg', NOW(), NOW()),

('Sugar-Free Almond Cookies', 'Healthy sugar-free cookies made with almond flour.', 15.99, 100, 'Snacks', 10.00, 'https://example.com/almond_cookies.jpg', NOW(), NOW()),

('Organic Stevia Sweetener', '100% natural zero-calorie sweetener for diabetes patients.', 8.50, 200, 'Sweeteners', 5.00, 'https://example.com/stevia.jpg', NOW(), NOW()),

('Low-Carb Protein Bar', 'High-protein, low-carb energy bar for diabetic diet management.', 12.00, 150, 'Snacks', 7.00, 'https://example.com/protein_bar.jpg', NOW(), NOW()),

('Diabetes-Friendly Brown Rice', 'Unpolished brown rice with a low glycemic index.', 20.00, 120, 'Grains', 8.00, 'https://example.com/brown_rice.jpg', NOW(), NOW()),

('Gluten-Free Multigrain Bread', 'Freshly baked gluten-free bread with no added sugar.', 11.50, 70, 'Bakery', 9.00, 'https://example.com/gluten_free_bread.jpg', NOW(), NOW());


(
  CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )

INSERT INTO orders (user_id, total_price, status, payment_status, created_at) VALUES
(1, 39.98, 'pending', 'unpaid', '2025-03-01 16:19:12'),
(2, 9.99, 'completed', 'paid', '2025-03-01 16:19:12'),
(3, 89.97, 'pending', 'unpaid', '2025-03-01 16:19:12'),
(1, 48.97, 'pending', 'unpaid', '2025-03-02 08:19:56');


CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    payment_id VARCHAR(255) NOT NULL,
    order_id VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(10) NOT NULL,
    status ENUM('pending', 'success', 'failed') DEFAULT 'pending',
    method VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
