class ChangeStatValueToString < ActiveRecord::Migration[6.0]
  def change
    change_column :stats, :value, :string
    remove_column :stats, :priority, :integer
  end
end
