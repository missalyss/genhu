class CreateHomes < ActiveRecord::Migration[6.0]
  def change
    create_table :homes do |t|
      t.string :name
      t.string :role
      t.integer :sheltered_children
      t.integer :victims
      t.integer :orphans
      t.integer :volunteers
      t.string :director
      t.string :sponsor

      t.timestamps
    end
  end
end
