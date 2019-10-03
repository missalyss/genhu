class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.string :image
      t.string :first_name
      t.string :last_name
      t.text :bio
      t.string :title
      t.string :email
      t.string :phone
      t.string :other
      t.string :role

      t.timestamps
    end
  end
end
