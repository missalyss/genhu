class CreateStats < ActiveRecord::Migration[6.0]
  def change
    create_table :stats do |t|
      t.string :name
      t.integer :value
      t.integer :priority

      t.timestamps
    end
  end
end
