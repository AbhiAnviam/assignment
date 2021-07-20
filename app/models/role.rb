class Role < ApplicationRecord
     # Associations
     has_many :users, dependent: :destroy
     # /Associations
end
