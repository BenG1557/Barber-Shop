const sql = require('mssql');

const config = {
    user: 'YourSqlUsername', // Use your SQL Server login user
    password: 'YourSqlPassword', // Use your SQL Server login password
    server: 'TEDDY\\SQLEXPRESS', // The server name from the image
    database: 'Barbershop', // The database name from the image
    options: {
        trustServerCertificate: true // Crucial for local development/SQLEXPRESS
    }
};

async function insertCustomer(name, email, phone) {
    try {
        await sql.connect(config);

        // 3. Define and execute the INSERT query
        const result = await sql.query`
            INSERT INTO Customers (Name, Email, phoneNum)
            VALUES (${name}, ${email}, ${phone});
        `;
        
        console.log(`Customer inserted successfully. Rows affected: ${result.rowsAffected}`);
        
    } catch (err) {
        console.error("Database operation failed:", err);
    } finally {
        sql.close();
    }
}

// Example usage from your website form implementation
insertCustomer('Jane Doe', 'jane.doe@example.com', '5551234');